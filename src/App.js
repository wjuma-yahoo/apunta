import { Header, Search, EmptyNotes, Notes } from './components';

import './App.css';

const notes = [
  // {
  //   title: 'A single note',
  //   body: 'This is only a single note for practice',
  //   timestamp: new Date().getTime()
  // }
]

export const App = () => {

  return (
    <div className="App">
      <Header items={[ {icon: 'plus'}, {icon: 'cog'}, {icon: 'close'} ]} />
      <div className="container">

        <div className="row">
          <div className="col-12">
            <h1>Notas rapidas</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Search />
          </div>
        </div>

        {
          (notes.length > 0)
          ? (
            <div className="row">
              <div className="col-12">
                <Notes />
              </div>
            </div>
          )
          : (
            <div className="row">
              <div className="col-12">
                <EmptyNotes />
              </div>
            </div>
          )
        }


      </div>
    </div>
  );
}
