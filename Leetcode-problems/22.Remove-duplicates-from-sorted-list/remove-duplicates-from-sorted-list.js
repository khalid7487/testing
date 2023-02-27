var deleteDuplicates = function(head) {

    if(head == null){return head;}

    let current = head;

    while(current.next !== null){

        if(current.val === current.next.val){
            current.next = current.next.next
        }else{
            current = current.next            
        }
    }
    return head;
};