// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Bilginiz Yaziniz")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("
// kosul 0'dan büyük olması, ? sonrasi kosul dogruysa username'i yazdir : sonrasi ile degilse "yazdirilacak olay";
           
info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`