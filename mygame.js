/*
BUAT fungsi getStatus
  TULISKAN "Player's current HP: 'playerHealth'"
  TULISKAN "Monster's current HP: 'monsterHealth'"
BUAT fungsi getPlayerProfile
  TULISKAN '----------Player Profile----------'
  SIMPAN array playerProfile dengan nama, job, playerAtk, dan playerHealth
  KEMBALIKAN playerProfile dengan DIPISAH secara koma.
BUAT fungsi getMonsterProfile
  TULISKAN '----------Monster Profile----------'
  SIMPAN array monsterProfile dengan nama, "Attack: "'monsterAtk', dan "Health: "'monsterHealth'
  KEMBALIKAN playerProfile dengan DIPISAH secara koma.
  
SIMPAN 'nama' di kolom nama.
SIMPAN salah satu dari tiga 'job'(Warrior, Priest, atau Wizard) di kolom job. 
SIMPAN 'playerLevel' di kolom playerLevel berdasarkan 101 DIKALI angka ACAK dengan TRUNCATE.
SIMPAN 'playerAtk' di kolom playerAtk berdasarkan 100 DITAMBAH playerLevel.
SIMPAN 'playerHealth' di kolom playerHealth berdasarkan 1000 DIKALI angka ACAK dengan TRUNCATE.
SIMPAN 'nama monster' di kolom monsterName.
SIMPAN 'monsterHealth' di kolom monsterHealth berdasarkan 1000 DIKALI angka ACAK dengan TRUNCATE.
SIMPAN 'monsterAtk' di kolom monsterAtk berdasarkan 100 dipangkat angka ACAK dengan TRUNCATE.

IF nama sama dengan kosong THEN
  TULISKAN 'Please write your name.'
ELSE IF job sama dengan kosong THEN
  TULISKAN 'Hello 'nama', please choose your class to start the game.'
  TULISKAN 'You can choose one of the 3 following classes: Warrior, Priest, and Wizard.'
END IF
ELSE IF nama tidak sama dengan kosong dan job sama dengan 'Warrior' THEN
  TULISKAN 'Welcome to the world of Ignatia, 'nama'!'
  TULISKAN 'As a 'job', fight your enemies hard with your weapon of choice!
END IF
ELSE IF nama tidak sama dengan kosong dan job sama dengan 'Priest' THEN
  TULISKAN 'Welcome to the world of Ignatia, 'nama'.'
  TULISKAN 'As a 'job', support your wounded companions! Protect the order!'
END IF
ELSE IF nama tidak sama dengan kosong dan job sama dengan 'Wizard' THEN
  TULISKAN 'Welcome to the world of Ignatia, 'nama'.'
  TULISKAN As a 'job', you can change the tide of war to your favor!'
END IF

IF nama tidak sama dengan kosong dan job sama dengan tidak kosong
  TULISKAN 'Battle Commence!'
  FOR index sama dengan 0, LEBIH KECIL SAMA DENGAN 500, dan index DITAMBAH 1
    IF index MODULUS playerAtk sama dengan 0 THEN
      TULISKAN "'job' 'nama' is attacking 'monsterName'!"
      KURANGI monsterHealth dengan playerAtk
      PANGGIL getStatus
    END IF
    ELSE IF index MODULUS monsterAtk sama dengan 0 THEN
      TULISKAN "'monsterName' is attacking 'job' 'nama'!""
      KURANGI playerHealth dengan monsterAtk
      PANGGIL getStatus
    END IF
    ELSE IF index MODULUS playerAtk MODULUS monsterAtk sama dengan 0 THEN
      TAMBAHKAN playerHealth dengan monsterAtk
      TAMBAHKAN monsterHealth dengan playerAtk
      PANGGIL getStatus
    END IF
  END FOR
  IF monsterHealth LEBIH KECIL dari playerHealth THEN
    TULISKAN 'Congratulation! 'job' 'nama' You've won the game!'
  END IF
  ELSE IF playerHealth LEBIH KECIL dari monsterHealth THEN
    TULISKAN 'Aww too bad, 'job' 'nama' has been defeated by 'monsterName'...try again next time!'
  END IF
END IF
*/

function spasi(){
    console.log('');
}
function getStatus(){
  console.log('Player\'s current HP: '+playerHealth);
  console.log('Monster\'s current HP: '+monsterHealth);
}
function getPlayerProfile(){
  console.log('----------Player Profile----------');
  var playerProfile = nama+','+job+',Attack: '+playerAtk+',Health: '+playerHealth;
  return playerProfile.split(',');
}
function getMonsterProfile(){
  console.log('----------Monster Profile----------');
  var monsterProfile = monsterName+',Attack: '+monsterAtk+',Health: '+monsterHealth;
  return monsterProfile.split(',');
}
// penentuan variabel
var nama = 'Ven'; //*bebas*
var job = 'Warrior'; //pilih satu diantara Warrior, Priest, atau Wizard
var playerLevel = Math.trunc(101 * Math.random());
var playerAtk = 100 + playerLevel;
var playerHealth = Math.trunc(1000 * Math.random());
var monsterName = 'Slime';
var monsterHealth = Math.trunc(1000 * Math.random());
var monsterAtk = Math.trunc(Math.pow(100, Math.random()));

console.log(getPlayerProfile());
spasi();
console.log(getMonsterProfile());
spasi();

//kode kondisi nama dan job
console.log('----------The Game----------');
if (nama === ''){
  console.log('Please write your name.');
}else if (job === '') {
  console.log('Hello '+nama+', please choose your class to start the game.');
  spasi();
  console.log('You can choose one of the 3 following classes: Warrior, Priest, and Wizard.');
}else if(nama !== '' && job === 'Warrior') {
  console.log('Welcome to the world of Ignatia, '+nama+'!');
  console.log('As a '+job+', fight your enemies hard with your weapon of choice!');
}else if(nama !== '' && job === 'Priest') {
  console.log('Welcome to the world of Ignatia, '+nama+'.');
  console.log('As a '+job+', support your wounded companions! Protect the order!');
}else if(nama !== '' && job === 'Wizard') {
  console.log('Welcome to the world of Ignatia, '+nama+'.');
  console.log('As a '+job+', you can change the tide of war to your favor!');
}

// kode pertarungan
if(nama !== '' && job !== ''){
spasi();
  console.log('Battle Commence!');
  spasi();
  
  for(var index = 0; index <= 500; index++) {
    if(index % playerAtk === 0) {
      console.log(job+ ' '+nama+' is attacking '+monsterName+'!');
      monsterHealth = monsterHealth - playerAtk;
      getStatus();
      spasi();
  }
  else if(index % monsterAtk === 0) {
    console.log(monsterName+' is attacking '+job+' '+nama+'!');
    playerHealth = playerHealth - monsterAtk;
    getStatus();
    spasi();
  }
  else if(index % playerAtk % monsterAtk === 0) {
    console.log('Both health increased!');
    playerHealth = playerHealth + monsterAtk;
    monsterHealth = monsterHealth + playerAtk;
    getStatus();
    spasi();
  }
    
  }
  if(monsterHealth < playerHealth){
    console.log('Congratulation! '+job+' '+nama+' You\'ve won the game!');
    }else if(playerHealth < monsterHealth){
      console.log('Aww too bad, ' + job + ' ' + nama + ' has been defeated by monster...try again next time!');
    }
}

