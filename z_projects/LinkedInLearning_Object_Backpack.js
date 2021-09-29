//Object

//Everything in JS are objects



const BackPack = {
    
    //Properties
    open: false,
    items:[],
    empty : this.items.length === 0,
    straps: {
        left : this.FEATURES.STRAPLENGTH.MAX,
        right: this.FEATURES.STRAPLENGTH.MAX
    },
    freeSpace = this.features.CAPACITY,
    isDry = true,
    isDirty = false,
    isWashable = this.FEATURES.WASHABLE,
    health = 100,
    FEATURES = {
        CAPACITY = 1000,
        WASHABLE = true,
        WASHDAMAGE = 0,
        STRAPLENGTH={
            MIN: 5, MAX: 20
        },
        DURABILITY_RATING = 5,
        MATERIAL = 'PLASTIC'
    },

    //constant error codes
    ERRORCODES = {
        NOSPACE = 'no space available!',
        DIRTY = 'the backpack is dirty',
        INVALIDLENGTH = 'Invalid length provided!',
        INVALIDSIDE = 'Specify the side you want to change strap!',
        NOTEMPTY = 'Can not wash a closed backpack',
        ITEMNOTFOUND = 'Item not found in backpack!',
        NOTWASHABLE='Backpack is not washable!',
        DAMAGED='Backpack is damaged, time to buy a new one!',
        NOTDRY='Backpack is not dry yet!'
    },

    //Methods
    async wait(t){
        for(let i=0; i<t; i++){
            await setTimeout(()=>{
                console.log('...');
            }, 1000);
        }
        
        console.log(`${t} seconds passed!`);
    },

    async adjustStrapLength(side, length){
        if(length < 5 || length > 20) throw ERRORCODES.INVALIDLENGTH;
        switch(side.toUpperCase()){
            case 'L':
                this.strap.left = length;
                await this.wait(2); //TBD
                break;
            case 'R':
                this.strap.right = length;
                await this.wait(2); //TBD
                break;
            default:
                throw this.ERRORCODES.INVALIDSIDE;
        }
    },

    //TBD
    // adjustStrapLength_Sync(){
    //     return await adjustStrapLength();
    // },

    travelWithBackPack(){
        if(this.health < 25) throw this.ERRORCODES.DAMAGED; //TBD
        else{
            //directly strap lengths are set to avoid time consuming shangeStrapLength() call
            this.strap.left = Math.floor(Math.random()*20);
            this.strap.right = Math.floor(Math.random()*20);
            this.isDirty = true;
        }
    },

    //closes the straps completely for packing up
    closeStraps(){
        let l = this.FEATURES.STRAPLENGTH.MIN;
        this.adjustStrapLength('L', l);
        this.adjustStrapLength('R', l);
    },

    //empties the backpack 
    emptyBackPack(){
        if(!open) throw 'Can not empty until the backpack is open!';
        else{
            this.items.map(item=>{
                console.log(`${item} removed!`);
                this.freeSpace = this.freeSpace + SIZE[item];
            })
            this.items.length = 0;
        }
    },

    //add item/s to backpack
    addItem(item){
        if(this.freeSpace <= SIZE[item]) throw this.ERRORCODES.NOSPACE;
        if(this.isDirty) throw this.ERRORCODES.DIRTY;
        else{
            this.freeSpace = this.freeSpace - SIZE[item];
            this.items.push(item);
            console.log(`${item} added to backpack!`);
        }
    },

    removeItem(item){
        if(!this.items.contains(item)) throw this.ERRORCODES.ITEMNOTFOUND;
        else{
            allItems = [];
            while(this.items.length > 0){
                let item = this.items.pop();
                allItems.push(item);

            }
            if(this.freeSpace <= SIZE[item]) throw this.ERRORCODES.NOSPACE;
            if(this.isDirty) throw this.ERRORCODES.DIRTY;
            else{
                this.freeSpace = this.freeSpace - SIZE[item];
                this.items.push(item);
                console.log(`${item} added to backpack!`);
            }
        }
    },
    
    //closes the backpack
    closeBackPack(){
        console.log('Backpack zipped !');
        this.open = false;
    },
    
    //opens the backpack
    openBackPack(){
        console.log('Backpack Unzipped !');
        this.open = true;
    },
    
    washBackPack(){
        if(!this.FEATURES.WASHABLE) throw this.ERRORCODES.NOTWASHABLE;
        if(!this.open) throw this.ERRORCODES.DIRTY;
        if(!this.empty) throw this.ERRORCODES.NOTEMPTY;
        else{
            this.isDry = false;
            //this.
        }
    },
    
    dryBackPack(){
        this.isDry = true;
        this.openBackPack();
    },

    checkEverything(){
        let message = '';
        if(this.items.length != 0)  msg = msg + this.ERRORCODES.NOTEMPTY;
        if(this.isDirty)  msg = msg + this.ERRORCODES.DIRTY;
        if(!this.isDry) msg = msg + this.ERRORCODES.NOTDRY;

        if(!msg) throw msg;
        else{
            console.log('Everthing is perfect! Backpack is ready for next voyage!');
        }
    },

    //Time to put backpack to shelf
    pack(){
        this.washBackPack();
        this.dryBackPack();
        this.openBackPack();
        this.emptyBackPack();
        this.closeBackPack();
        this.closeStraps();
        this.checkEverything();
    }
}



//1
//Important properties
BackPack.addItems();

//2
//Important methods

//3
//Examples
