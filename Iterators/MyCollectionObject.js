class mycollection{
    constructor(){
        this.content = [];
    }
    add(value, duplicateallowed=true){
        console.log(`Adding ${value} to [${this.content}]`);
        if(value in this.content && !duplicateallowed){
            console.log('can not add duplicate');
            return;
        }
        this.content.push(value);
    }
    
    addAsList = this.add;
    addAsSet(value){
        this.add(value, false);
    }
    defaultSorter(thiis, thaat){
        return thiis > thaat;
    }
    sort(sorter = this.defaultSorter){
        this.content.sort(sorter)
    }
    print(){
        console.log(...this.content);
    }
}
col = new collection();
[].__proto__.map.call([1,2,1,3,3,4], (i) => col.addAsSet(i));
[].__proto__.map.call([5,6,6,7,8,9,9], (i) => col.addAsList(i));

col.sort();
col.print();
