import './App.css';
import {useState} from "react";
import {solve} from "./solution";
function App() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(1);
  return (
      <div className="App">
        <h1>Конвертер величин</h1>
        <input type={"text"} placeholder={"Введите размер величины"} id={"inputValue"} onChange={(e)=>{
          if(!isNaN(+e.target.value)){
            setValue3(+(e.target.value))
          } else {
            setValue1(1)
          }
        }}/>
        <div className={"values"}>
          <form onSubmit={(e)=>{
            e.preventDefault();
          }}>
            <h2>Выберите базовую величину:</h2>

            <div>
              <input type="radio" id="Милли" name="value" value="Сантиметр" onChange={(e)=>{
                setValue1(0.01);
              }}/>
              <label htmlFor="Милли">Миллиметр</label>
            </div>

            <div>
              <input type="radio" id="Санти" name="value" value="Сантиметр" onChange={(e)=>{
                setValue1(1);
              }}/>
              <label htmlFor="Санти">Сантиметр</label>
            </div>

            <div>
              <input type="radio" id="Дюйм" name="value" value="Дюйм"  onChange={(e)=>{
                setValue1(2.54);
              }}/>
              <label htmlFor="Дюйм">Дюйм</label>
            </div>

            <div>
              <input type="radio" id="Вершок" name="value" value="Вершина"  onChange={(e)=>{
                setValue1(4.45);
              }}/>
              <label htmlFor="Вершок">Вершок</label>
            </div>

            <div>
              <input type="radio" id="Фут" name="value" value="Фут"  onChange={(e)=>{
                setValue1(30.48);
              }}/>
              <label htmlFor="Фут">Фут</label>
            </div>

            <div>
              <input type="radio" id="Аршин" name="value" value="Аршин"  onChange={(e)=>{
                setValue1(71.12);
              }}/>
              <label htmlFor="Аршин">Аршин</label>
            </div>

            <div>
              <input type="radio" id="Метр" name="value" value="Сантиметр" onChange={(e)=>{
                setValue1(100);
              }}/>
              <label htmlFor="Метр">Метр</label>
            </div>

            <div>
              <input type="radio" id="Кило" name="value" value="Километр"  onChange={(e)=>{
                setValue1(100000);
              }}/>
              <label htmlFor="Кило">Километр</label>
            </div>

            <div>
              <input type="radio" id="Верста" name="value" value="Верста"  onChange={(e)=>{
                setValue1(106680);
              }}/>
              <label htmlFor="Верста">Верста</label>
            </div>

            <div>
              <input type="radio" id="Миля" name="value" value="Миля"  onChange={(e)=>{
                setValue1(160934.4);
              }}/>
              <label htmlFor="Миля">Миля</label>
            </div>

          </form>
          <form onSubmit={(e)=>{
            e.preventDefault();
          }}>
            <h2>Выберите величину, в которую хотите перевести:</h2>

            <div>
              <input type="radio" id="Милли" name="value" value="Сантиметр" onChange={(e)=>{
                setValue2(0.01);
              }}/>
              <label htmlFor="Милли">Миллиметр</label>
            </div>

            <div>
              <input type="radio" id="Санти" name="value" value="Сантиметр" onChange={(e)=>{
                setValue2(1);
              }}/>
              <label htmlFor="Санти">Сантиметр</label>
            </div>

            <div>
              <input type="radio" id="Дюйм" name="value" value="Дюйм"  onChange={(e)=>{
                setValue2(2.54);
              }}/>
              <label htmlFor="Дюйм">Дюйм</label>
            </div>

            <div>
              <input type="radio" id="Вершок" name="value" value="Вершина"  onChange={(e)=>{
                setValue2(4.45);
              }}/>
              <label htmlFor="Вершок">Вершок</label>
            </div>

            <div>
              <input type="radio" id="Фут" name="value" value="Фут"  onChange={(e)=>{
                setValue2(30.48);
              }}/>
              <label htmlFor="Фут">Фут</label>
            </div>

            <div>
              <input type="radio" id="Аршин" name="value" value="Аршин"  onChange={(e)=>{
                setValue2(71.12);
              }}/>
              <label htmlFor="Аршин">Аршин</label>
            </div>

            <div>
              <input type="radio" id="Метр" name="value" value="Сантиметр" onChange={(e)=>{
                setValue2(100);
              }}/>
              <label htmlFor="Метр">Метр</label>
            </div>

            <div>
              <input type="radio" id="Кило" name="value" value="Километр"  onChange={(e)=>{
                setValue2(100000);
              }}/>
              <label htmlFor="Кило">Километр</label>
            </div>

            <div>
              <input type="radio" id="Верста" name="value" value="Верста"  onChange={(e)=>{
                setValue2(106680);
              }}/>
              <label htmlFor="Верста">Верста</label>
            </div>

            <div>
              <input type="radio" id="Миля" name="value" value="Миля"  onChange={(e)=>{
                setValue2(160934.4);
              }}/>
              <label htmlFor="Миля">Миля</label>
            </div>
          </form>

        </div>

        <h1>Результат: {solve(value1, value2, value3)}</h1>

      </div>
  );
}

export default App;