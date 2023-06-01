import { revalidatePath } from 'next/cache'
/* const Actions = ({ status, message, onValidated }: any) => {
    async function createPost(data: any) {
        'use server'



        const title = data.get('name')
        const email = data.get('email')
        console.log(title, email)
    }

    return (
        <>
            <form action={createPost} style={{ padding: '10rem' }}>
                <label>name</label>
                <input type="text" name="name" />
                <label>email</label>
                <input type="email" name="email" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Actions
 */

const todos: string[] = ['Learn React']

export default function Actions() {
    async function addTodo(data: FormData) {
        'use server'
        const todo = data.get('todo') as string
        todos.push(todo)
        revalidatePath('/')
    }

    return (
        <main className="p-5" style={{ padding: '10rem' }}>
            <h1 className="text-4xl font-bold">Todos</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <form
            //action={addTodo}
            >
                <input
                    type="text"
                    name="todo"
                    className="border border-gray-300 rounded-lg py-4 px-4 text-base font-normal text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                    Add Todo
                </button>
            </form>
        </main>
    )
}
