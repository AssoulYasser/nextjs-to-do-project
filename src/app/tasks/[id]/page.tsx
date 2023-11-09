export default function Task({ params }: { params: { id: number } }) {
    return (
        <main>
            TASK {params.id}
        </main>
    );
}