// 获取弹窗
let popupWindow = document.getElementById('myPopupWindow');

// 获取按钮对象
let btn = document.getElementById('myBtn');

// 获取 <span> 元素，用于关闭弹窗
let span = document.querySelector('.close');

// 点击按钮打开弹窗
btn.onclick = function () {
	popupWindow.style.display = "block";
}

// 点击 <span> 按钮，关闭弹窗
span.onclick = function () {
	popupWindow.style.display = "none";
}

// 点击其他空白位置，关闭弹窗
window.onclick = function (event) {
	if (event.target == popupWindow) {
		popupWindow.style.display = "none";
	}
}