import "../App.css";
// Array data buku
const books = [
    {id: 1, jdlbuku: "Express.js1", ISBN: 111},
    {id: 2, jdlbuku: "Express.js2", ISBN: 222},
    {id: 3, jdlbuku: "Express.js3", ISBN: 333},
];

export function RenderingList() {
    // petakan data buku ke dalam baru JSX, listBook
    const listBook = books.map((buku) => (
        <ul className="kolom">
            <li>
                {/* Tampilkan data buku sesuai dengan field */}
                ID={buku.id} Judul Buku={buku.jdlbuku} ISBN={buku.ISBN}
            </li>
        </ul>
    ));

    // Tampilkan data listBook dari Component
    return <ul>{listBook}</ul>
}