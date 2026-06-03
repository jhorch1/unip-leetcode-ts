
class ListNode {
    val: number
    next: ListNode | null

    constructor(
        val?: number,
        next?: ListNode | null
    ) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}


function deleteDuplicates(
    head: ListNode | null
): ListNode | null {
    let current = head;

    while (
        current !== null &&
        current.next !== null
    ) {

        if (
            current.val === current.next.val
        ) {
            current.next = current.next.next;

        } else {
            current = current.next;
        }
    }
    return head;
}

// Caso de prueba
const head = new ListNode(
    1,
    new ListNode(
        1,
        new ListNode(
            2,
            new ListNode(
                3,
                new ListNode(3)
            )
        )
    )
);

const result = deleteDuplicates(head);

let current = result;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}

