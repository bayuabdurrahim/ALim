function Mahasiswa({nama, lulus}) {
    if (lulus) {
        return (
            <li className="Mahasiswa">
                {nama} <strong>LULUS</strong>
            </li>
        );
    }
    return (
        <li className="Mahasiswa">
            {nama}
            <strong> Tidak LULUS</strong>
        </li>
    );
}

export function LulusUjian() {
    return (
        <section>
            <h1>Daftar Nama Mahasiswa</h1>
            <ul>
                <Mahasiswa lulus={true} nama="Alim Sujito" />
                <Mahasiswa lulus={true} nama="Agung iswahyudi" />
                <Mahasiswa lulus={false} nama="Arifin hidayat" />
                <Mahasiswa lulus={false} nama="Nur Rizkiawan" />
            </ul>
        </section>
    );
}