

import olma from "./assets/apple.png"
let arr = [
    { id: 1, name: "Olma", img: olma, color: "red" },
    { id: 1, name: "Olma", img: olma, color: "red" },
    { id: 1, name: "Olma", img: olma, color: "red" },
    { id: 1, name: "Olma", img: olma, color: "red" },
    { id: 1, name: "Olma", img: olma, color: "red" },
]
function Fruits() {
    return (
        <div>
            <h2>Fruits</h2>

            <div className='cards'>

                {
                    arr.map(v=> <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jmQWSWyG81NktRt11Buvdp0TWAQClnyvcA&s" alt="" />
                        <h3>Olma</h3>
                    </div>)
          }

            </div>

        </div>
    )
}

export default Fruits