using System.Collections;
using System.Collections.Generic;

using UnityEngine;
using UnityEngine.UI;

public class View : MonoBehaviour
{
    public Button popupBtn;

    void Start()
    {
        popupBtn.onClick.AddListener(OnClickPopupBtn);
    }

    void OnDestroy()
    {
        popupBtn.onClick.RemoveListener(OnClickPopupBtn);
    }

    private void OnClickPopupBtn()
    {
        Debug.Log("点击弹出窗口按钮");

        WebHelper.HelloConsole("Hello Console!");

        WebHelper.UnitySendMessageToHtml("打开视频播放窗口");
    }
}
