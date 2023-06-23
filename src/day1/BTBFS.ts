export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number> | null | undefined;
        console.log("current", curr);
        console.log("q", q);

        if (!curr) {
            continue;
        }
        if (curr?.value === needle) {
            return true;
        }
        q.push(curr!.right);
        q.push(curr!.left);
    }
    return false;
}
