// 显示弹窗
function showModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setTimeout(function() {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 100);
}

// 关闭弹窗
function hideModal() {
    let modal = document.getElementById('myModal');
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.opacity = '0';
    setTimeout(function() {
        modal.style.display = 'none';
    }, 500); /* 等待0.5秒后完全消失 */
}

















