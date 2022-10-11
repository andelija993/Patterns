interface Android {
    chargeAndroid():void
}

class SamsungS9 implements Android {
chargeAndroid() {
    console.log('Charging android...');   
}
}

interface iPhone {
    chargeIphone(): void;
  }

class IphonetoAndroidAdapter implements iPhone {
    constructor(private android:Android){}
        chargeIphone(){
            this.android.chargeAndroid();
        } 
}

const samsungS9 = new SamsungS9();
const androidAdapter = new IphonetoAndroidAdapter(samsungS9);
androidAdapter.chargeIphone()

export{}