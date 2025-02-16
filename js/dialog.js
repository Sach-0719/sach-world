const dialog = document.getElementById('myDialog');
const openDialog = document.getElementById('openDialog');
const closeDialog = document.getElementById('closeDialog');

openDialog.addEventListener('click', () => {
  dialog.showModal(); // モーダルダイアログを開く
});

vd.addEventListener('click', () => {
  dialog.showModal(); // モーダルダイアログを開く
});


closeDialog.addEventListener('click', () => {
  dialog.close(); // ダイアログを閉じる
});
function formrunMessage() {
  
  var result  = confirm("Sach-worldサイトを離れ、Googleフォームのページに移動します。。よろしいですか？");

  if(result){
    window.open('https://forms.gle/uYL8uoNbJJvch7S47', '_blank')
  }

  }