const dialog = document.getElementById('myDialog');
const openDialog = document.getElementById('openDialog');
const closeDialog = document.getElementById('closeDialog');

openDialog.addEventListener('click', () => {
  dialog.showModal(); // モーダルダイアログを開く
});

closeDialog.addEventListener('click', () => {
  dialog.close(); // ダイアログを閉じる
});