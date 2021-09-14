class Settings{
    constructor(){
        if (Settings.instance instanceof Settings) {
            return Settings.instance;
        }
        this.settingsobject={
            background:'red',
            version:Math.floor(Math.random()*2000)
        }
        Object.freeze(this.settingsobject);
        Object.freeze(this);
        Settings.instance = this;
    }
    get(key){
        return this.settingsobject[key];
    }
}


const set1 = new Settings();
const set2 = new Settings();
console.log(set1,set2);
console.log(set1==set2);






