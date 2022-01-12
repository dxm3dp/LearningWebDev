using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;

using UnityEngine;

public static class WebHelper
{
    [DllImport("__Internal")]
    public static extern void HelloConsole(string str);

    [DllImport("__Internal")]
    public static extern void UnitySendMessageToHtml(string str);
}
