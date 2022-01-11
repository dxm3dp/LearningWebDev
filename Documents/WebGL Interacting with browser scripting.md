# WebGL : Interacting with browser scripting

When building content for the web , you might need to communicate with other elements on your web page . Or you might want to implement functionality using Web APIs which Unity does not currently expose by default . In both cases , you need to directly interface with brower's JavaScript engine . Unity WebGL provides different methods to do this .

## Calling JavaScript functions from Unity scripts

The recommended way of using brower JavaScript in your project is to add your JaveScript sources to your project , and then call those functions directly from your script code . To do so , place files with JavaScript code using the `.jslib` extension under a "Plugins" subfolder in your Assets folder . The plugin file needs to have a syntax like this :

```js
mergeInto(LibraryManager.library, {

  Hello: function () {
    window.alert("Hello, world!");
  },

  HelloString: function (str) {
    window.alert(Pointer_stringify(str));
  },

  PrintFloatArray: function (array, size) {
    for(var i = 0; i < size; i++)
    console.log(HEAPF32[(array >> 2) + i]);
  },

  AddNumbers: function (x, y) {
    return x + y;
  },

  StringReturnValueFunction: function () {
    var returnStr = "bla";
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },

  BindWebGLTexture: function (texture) {
    GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
  },
});
```

Then you can call these functions from your C# scripts like this :

```cs
using UnityEngine;
using System.Runtime.InteropServices;

public class NewBehaviourScript : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern void Hello();

    [DllImport("__Internal")]
    private static extern void HelloString(string str);

    [DllImport("__Internal")]
    private static extern void PrintFloatArray(float[] array, int size);

    [DllImport("__Internal")]
    private static extern int AddNumbers(int x, int y);

    [DllImport("__Internal")]
    private static extern string StringReturnValueFunction();

    [DllImport("__Internal")]
    private static extern void BindWebGLTexture(int texture);

    void Start() {
        Hello();
        
        HelloString("This is a string.");
        
        float[] myArray = new float[10];
        PrintFloatArray(myArray, myArray.Length);
        
        int result = AddNumbers(5, 7);
        Debug.Log(result);
        
        Debug.Log(StringReturnValueFunction());
        
        var texture = new Texture2D(0, 0, TextureFormat.ARGB32, false);
        BindWebGLTexture(texture.GetNativeTexturePtr());
    }
}
```

Simple numberic types can be passed to JavaScript in function parameters without requiring any conversion . Other data types will be passed as a pointer in the emscripten heap (which is really a big array in JavaScript) . For strings , you can use the `Pointer_stringify` helper function to convert to a JavaScript string . To return a string value you need to call `_malloc` to allocate some memory and the `stringToUTF8` helper function to write a JavaScript string to it . If the string is a return value , then the **il2cpp** runtime will take care of freeing the memory for you . For arrays of primitive types , `emscripten` provides different `ArrayBufferViews` into it's heap for different sizes of integer , unsigned integer or floating point representations of memory : **HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64** . To access a texture in WebGL , emscripten provides the `GL.textures` array which maps native texture IDs from Unity to WebGL texture objects . WebGL functions can be called on emscripten's WebGL context , `GLctx` .

For more information on how to interact with JavaScript , refer to the [emscipten documentation](https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html).

In addition , note that in the Unity installation folder there are several plugins that you can use as reference , in `PlaybackEngines/WebGLSupport/BuillTools/lib` and `PlaybackEngines/WebGLSupport/BuildTools/Emscripten/src/library*` .

## Calling Unity scripts functions from JavaScript

Sometimes you need to send some data or notification to the Unity script from the brower's JavaScript . The recommended way of doing it is to call methods on **GameObjects** in your content . If you are making the call from a JavaScript plugin , embedded in your project , you can use the following code :

`unityInstance.SendMessage(objectName, methodName, value);`

Where **objectName** is the name of an object in your scene ; **methodName** is the name of a method in the script , currently attached to that object ; **value** can be a string , a number , or can be empty . For example :

```js
unityInstance.SendMessage('MyGameObject', 'MyFunction');

unityInstance.SendMessage('MyGameObject', 'MyFunction', 5);

unityInstance.SendMessage('MyGameObject', 'MyFunction', 'MyString');
```

If you would like to make a call from the global scope of the embedding page , see the *Code Visibility* section below .