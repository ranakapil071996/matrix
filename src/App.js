import React, { useState } from 'react';
import { AppBar, Slider } from '@material-ui/core';

export default function App() {
  const [state, setState] = useState({
    fabric: 60,
    consumption: 0,
    cutmake: 70,
    trims: 15
  });

  return (
    <div>
      <AppBar style={{ padding: 20, textAlign: 'center' }}>Matix</AppBar>
      <div
        style={{
          padding: 20,
          justifyContent: 'center',
          display: 'flex',
          marginTop: 100,
          alignItems: 'center',
          height: 300
        }}
      >
        <div
          style={{
            width: 200,
            marginBottom: 20,
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Slider
            orientation='vertical'
            value={state.fabric}
            onChange={(e, newValue) => setState({ ...state, fabric: newValue })}
            valueLabelDisplay='on'
            min={50}
            max={200}
            color='secondary'
          />
          <p
            style={{
              margin: 0,
              color: '#777',
              fontSize: 10,
              marginTop: 10,
              fontStyle: 'italic'
            }}
          >
            Fabric Price
          </p>
        </div>
        <div
          style={{
            width: 200,
            marginBottom: 20,
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Slider
            orientation='vertical'
            value={state.consumption}
            onChange={(e, newValue) =>
              setState({ ...state, consumption: newValue })
            }
            valueLabelDisplay='on'
            min={0}
            max={200}
            color='secondary'
          />
          <p
            style={{
              margin: 0,
              color: '#777',
              fontSize: 10,
              marginTop: 10,
              fontStyle: 'italic'
            }}
          >
            Consumption
          </p>
        </div>
        <div
          style={{
            width: 200,
            marginBottom: 20,
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Slider
            orientation='vertical'
            value={state.cutmake}
            onChange={(e, newValue) =>
              setState({ ...state, cutmake: newValue })
            }
            valueLabelDisplay='on'
            min={70}
            max={150}
            color='secondary'
          />
          <p
            style={{
              margin: 0,
              color: '#777',
              fontSize: 10,
              marginTop: 10,
              fontStyle: 'italic'
            }}
          >
            Cutmake Price
          </p>
        </div>
        <div
          style={{
            width: 200,
            marginBottom: 20,
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Slider
            orientation='vertical'
            value={state.trims}
            onChange={(e, newValue) => setState({ ...state, trims: newValue })}
            valueLabelDisplay='on'
            min={15}
            max={50}
            color='secondary'
          />
          <p
            style={{
              margin: 0,
              color: '#777',
              fontSize: 10,
              marginTop: 10,
              fontStyle: 'italic'
            }}
          >
            Trims Price
          </p>
        </div>
        <div
          style={{
            width: 200,
            marginBottom: 20,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              background: '#67b383',
              color: '#fff'
            }}
          >
            ₹{state.fabric * state.consumption + state.cutmake + state.trims}
          </div>
        </div>
      </div>
    </div>
  );
}
