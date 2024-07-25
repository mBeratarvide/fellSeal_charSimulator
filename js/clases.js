class Job {
  constructor(id, clase, stats = new Stats()) {
    this.id = id;
    this.clase = clase;
    this.stats = stats;
  }
  getClase() {
    return this.clase[localStorage.getItem('idioma')];
  }
}

class Stats {
  constructor(hp=0, sp=0, atk=0, def=0, int=0, res=0, cri=0, spd=0, eva=0, waterRes=0, fireRes=0, earthRes=0, thunderRes=0, darkRes=0, holyRes=0) {
    this.hp = hp;
    this.sp = sp;
    this.atk = atk;
    this.def = def;
    this.int = int;
    this.res = res;
    this.cri = cri;
    this.spd = spd;
    this.eva = eva;
    this.waterRes = waterRes;
    this.fireRes = fireRes;
    this.earthRes = earthRes;
    this.thunderRes = thunderRes;
    this.darkRes = darkRes;
    this.holyRes = holyRes;
  }
}

const mercenary = new Job('mercenary', {'es':"Mercenario", 'en':'Mercenary'});
mercenary.stats.hp = 6; mercenary.stats.def = 5;
const knight = new Job('knight', {'es':"Caballero",'en':'Knight'});
knight.stats.hp = 6; knight.stats.def = 5; knight.stats.res = 3;
const templar = new Job('templar', {'es':"Templario",'en':'Templar'});
templar.stats.def = 5; templar.stats.res = 5; templar.stats.holyRes = 5;
const duelist = new Job('duelist', {'es':"Duelista",'en':'Duelist'});
duelist.stats.atk = 5; duelist.stats.def = 5; duelist.stats.waterRes = 5; duelist.stats.fireRes = 5; duelist.stats.thunderRes = 5; duelist.stats.earthRes = 5;
const barbarian = new Job('barbarian', {'es':"Bárbaro",'en':'Reaver'});
barbarian.stats.hp = 6; barbarian.stats.atk = 5; barbarian.stats.cri = 2;
const assassin = new Job('assassin', {'es':"Asesino",'en':'Assassin'});
assassin.stats.atk = 5; assassin.stats.spd = 6; assassin.stats.cri = 2;
const ranger = new Job('ranger', {'es':"Montaraz",'en':'Ranger'});
ranger.stats.hp = 5; ranger.stats.atk = 5; ranger.stats.eva = 1;
const scoundrel = new Job('scoundrel', {'es':"Rufián",'en':'Scoundrel'});
scoundrel.stats.spd = 3; scoundrel.stats.eva = 1; scoundrel.stats.cri = 2;
const gunner = new Job('gunner', {'es':"Pistolero",'en':'Gunner'});
gunner.stats.atk = 5; gunner.stats.def = 5; gunner.stats.res = 2;
const peddler = new Job('peddler', {'es':"Buhonero",'en':'Peddler'});
peddler.stats.hp = 5; peddler.stats.sp = 5; peddler.stats.spd = 3;
const cleric = new Job('cleric', {'es':"Clérigo",'en':'Mender'});
cleric.stats.hp = 5; cleric.stats.int = 5; cleric.stats.res = 2;
const alchemystic = new Job('alchemystic', {'es':"Alquimístico",'en':'Alchemystic'});
alchemystic.stats.sp = 5; alchemystic.stats.res = 5; alchemystic.stats.spd = 3;
const sorcerer = new Job('sorcerer', {'es':'Hechicero','en':'Sorcerer'});
sorcerer.stats.sp = 10; sorcerer.stats.def = 5; sorcerer.stats.res = 3;
const plague_doctor = new Job('plague_doctor', {'es':'Doctor de la plaga','en':'Plague doctor'});
plague_doctor.stats.hp = 5; plague_doctor.stats.int = 5; plague_doctor.stats.def = 5;
const wizard = new Job('wizard', {'es':'Mago','en':'Wizard'});
wizard.stats.sp = 5; wizard.stats.int = 5; wizard.stats.res = 5;
const druid = new Job('druid', {'es':'Druida','en':'Druid'});
druid.stats.int = 5; druid.stats.res = 5; druid.stats.waterRes = 5; druid.stats.fireRes = 5; druid.stats.thunderRes = 5; druid.stats.earthRes = 5;
const evil_sword = new Job('evil_sword', {'es':'Espada vil','en':'Fellblade'});
evil_sword.stats.atk = 5; evil_sword.stats.int = 5; evil_sword.stats.cri = 2;
const warmage = new Job('warmage', {'es':'Mago de batalla','en':'Warmage'});
warmage.stats.hp = 5; warmage.stats.atk = 5; warmage.stats.int = 5;
const tahur = new Job('tahur', {'es':'Tahúr','en':'Gambler'});
tahur.stats.mp = 5; tahur.stats.eva = 2; tahur.stats.cri = 2;
const gadgeteer = new Job('gadgeteer', {'es':'Inventor','en':'Gadgeteer'});
gadgeteer.stats.hp = 2; gadgeteer.stats.def = 5; gadgeteer.stats.res = 5;
const samurai = new Job('samurai', {'es':'Samurai','en':'Samurai'});
samurai.stats.atk = 5; samurai.stats.spd = 2; samurai.stats.cri = 2;
const tamer = new Job('tamer', {'es':'Domador','en':'Wrangler'});
tamer.stats.hp = 5; tamer.stats.sp = 5; tamer.stats.int = 2;
const beast_master = new Job('beast_master', {'es':'Señor de las bestias','en':'Beastmaster'});
beast_master.stats.int = 3; beast_master.stats.def = 5; beast_master.stats.res = 5;

const reserva = [
  mercenary,
  knight,
  templar,
  duelist,
  barbarian,
  assassin,
  ranger,
  scoundrel,
  gunner,
  peddler,
  cleric,
  alchemystic,
  sorcerer,
  plague_doctor,
  wizard,
  druid,
  evil_sword,
  warmage,
  tahur,
  gadgeteer,
  samurai,
  tamer,
  beast_master
];
