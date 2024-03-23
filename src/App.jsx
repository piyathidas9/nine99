import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Piyathida Sankaew (nine)">
          <h3>ตำแหน่ง : it</h3>
        </Title>

        <Title title="Contact">
     
          
          <p>วันเกิด: {moment("2003/03/05").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66640787633
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : ninepytd529@gmail.com</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ปิยะธิดา สานแก้ว กำลังหาประสบการณ์ฝึกงานด้านไอทีค่ะ</p>
        </Title>

        <Title title="Work Experience">
          <p>สามารถใช้ microsoft word & microsoft powerpoint ได้</p>
        </Title>

        <Title title="Skills">
          <p>อินโฟกราฟิก</p>
          <p>powerpoint</p>
         
        </Title>
      </div>
    </main>
  )
}

export default App
