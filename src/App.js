import React, { useState } from 'react';
import { AppBar, Slider } from '@material-ui/core';

export default function App() {
  const [state, setState] = useState({
    fabric: 60,
    consumption: 1,
    cutmake: 70,
    trims: 15,
    percentage: 1
  });
  const margin = state.fabric * state.consumption + state.cutmake + state.trims;

  const marginPercentage = (margin * state.percentage) / 100;

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
            max={4}
            step={0.1}
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
            height: 230,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Slider
            orientation='vertical'
            value={state.percentage}
            onChange={(e, newValue) =>
              setState({ ...state, percentage: newValue })
            }
            valueLabelDisplay='on'
            min={0}
            max={100}
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
            Margin Percentage
          </p>
        </div>
        <div>
          <div
            style={{
              width: margin + 50,
              marginBottom: 20,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: margin,
                height: margin,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                background: '#67b383',
                color: '#fff'
              }}
            >
              ₹{margin}
            </div>
            <div
              style={{
                width: marginPercentage,
                height: marginPercentage,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                background: '#dd7632',
                color: '#fff',
                opacity: 0.4,
                position: 'absolute'
              }}
            ></div>
          </div>
          <div style={{ fontSize: 10, color: '#777' }}>
            <b>Price:</b> <span style={{ fontSize: 13 }}>₹{margin}</span>
          </div>
          <div style={{ fontSize: 10, color: '#777' }}>
            <b>Margin Percent Price:</b>{' '}
            <span style={{ fontSize: 13 }}>{marginPercentage}</span>
          </div>
          <div style={{ fontSize: 10, color: '#777' }}>
            <b>Total Price:</b>{' '}
            <span style={{ fontSize: 13 }}>{marginPercentage + margin}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
