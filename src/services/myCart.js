export var InTheCart = [

];
export var totalCount = 0;

export function AddToCart(item) {
    //console.log(item.id);
    if(!ContainsInTheCart(item.id)) {
        InTheCart.push({item, count: 1});
        console.log(InTheCart, 'naujo pridejimas');
    } else {
        ///debugger;
        let index = InTheCart.findIndex(x=> x.item == item);
        InTheCart[index].count +=1;
       
        console.log(InTheCart, 'papildytamas');
    }
    totalCount++;
    console.log(totalCount);
}

export function ContainsInTheCart(id) {
    return InTheCart.findIndex(x=> x.item.id == id) != -1 ? true: false;   
}

export function RemoveFromCart(id) {
   // console.log(id, 'cia id');
    //InTheCart.forEach(x=> { console.log(x.item.id)});

    let index =  InTheCart.findIndex(x=> x.item.id == id);
    //index != -1 ? InTheCart[index].count <= 1 ? InTheCart.splice(index, 1): (InTheCart[index].count--):console.log(); 

    if(index != -1) {
        if(InTheCart[index].count <= 1) {
            InTheCart.splice(index, 1)
        } else {
            InTheCart[index].count--
        }
        totalCount--;
    }
    console.log(totalCount);
}
export function getItemCount(id) {
    let index = InTheCart.findIndex(x=> x.item.id == id);
    return index < 0 ? 0: InTheCart[index].count;
}

export function getCart() {
    console.log(InTheCart, 'cia yra cart');
    return InTheCart;
}

export function getTotalCount() {
    return totalCount;
}

export function clearCart() {
    InTheCart= [];
    totalCount = 0;
}