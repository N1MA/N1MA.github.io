(function () {
  'use strict';

  const DEFAULT_STATE = {
    season: 1,
    region: 1,
    watch: 1,
    skies: 1,
    wind: 1,
    temp: 25,
  };

  const presetData = {
    season: [
      { id: 1, title: 'Early Spring', tempMod: -11, rainMult: 1.1, windMult: 1.1 },
      { id: 2, title: 'Mid Spring', tempMod: -6, rainMult: 1.1, windMult: 1.1 },
      { id: 3, title: 'Late Spring', tempMod: 3, rainMult: 1.3, windMult: 1.1 },
      { id: 4, title: 'Early Summer', tempMod: 8, rainMult: 0.8, windMult: 1.0 },
      { id: 5, title: 'Mid Summer', tempMod: 11, rainMult: 0.9, windMult: 0.9 },
      { id: 6, title: 'Late Summer', tempMod: 8, rainMult: 1.1, windMult: 0.9 },
      { id: 7, title: 'Early Autumn', tempMod: 8, rainMult: 1.2, windMult: 1.0 },
      { id: 8, title: 'Mid Autumn', tempMod: 3, rainMult: 1.3, windMult: 1.0 },
      { id: 9, title: 'Late Autumn', tempMod: -3, rainMult: 1.0, windMult: 1.0 },
      { id: 10, title: 'Early Winter', tempMod: -8, rainMult: 0.9, windMult: 1.0 },
      { id: 11, title: 'Mid Winter', tempMod: -8, rainMult: 1.0, windMult: 1.0 },
      { id: 12, title: 'Late Winter', tempMod: -6, rainMult: 1.2, windMult: 1.0 },
    ],
    region: [
      { id: 1, title: 'Arctic', tempMod: -12, rainMult: 2.0, windMult: 1.8 },
      { id: 2, title: 'Coast', tempMod: 13, rainMult: 1.5, windMult: 1.9 },
      { id: 3, title: 'Desert', tempMod: 27, rainMult: 0.3, windMult: 1.6 },
      { id: 4, title: 'Forest', tempMod: 13, rainMult: 1.2, windMult: 0.5 },
      { id: 5, title: 'Grassland', tempMod: 21, rainMult: 1.0, windMult: 1.6 },
      { id: 6, title: 'Hill', tempMod: 18, rainMult: 1.0, windMult: 1.3 },
      { id: 7, title: 'Mountain', tempMod: 13, rainMult: 0.7, windMult: 1.4 },
      { id: 8, title: 'Open Water', tempMod: 10, rainMult: 1.0, windMult: 1.6 },
      { id: 9, title: 'Underdark', tempMod: 4, rainMult: 0.2, windMult: 0.1 },
      { id: 10, title: 'Urban', tempMod: 18, rainMult: 1.0, windMult: 0.7 },
    ],
    watch: [
      { id: 1, title: 'Dawn', tempMod: 2 },
      { id: 2, title: 'Midday', tempMod: 6 },
      { id: 3, title: 'Afternoon', tempMod: 2 },
      { id: 4, title: 'Evening', tempMod: -1 },
      { id: 5, title: 'Midnight', tempMod: -6 },
      { id: 6, title: 'Night', tempMod: -3 },
    ],
    skies: [
      {
        id: 1,
        title: 'Clear Skies',
        probs: [
          { id: 1, value: 91 },
          { id: 2, value: 7 },
          { id: 3, value: 2 },
        ],
        desc: 'No additional effects.',
      },
      {
        id: 2,
        title: 'Light Rain',
        probs: [
          { id: 1, value: 35 },
          { id: 2, value: 65 },
          { id: 3, value: 15 },
        ],
        desc:
          'Disadvantage on ability checks to climb or scale objects and ability checks made to maintain balance or keep one’s footing.',
        snowDesc: `The area becomes lightly obscured.
                  Advantage on Wisdom (Survival) checks to track creatures.
                  `,
      },
      {
        id: 3,
        title: 'Heavy Rain',
        probs: [
          { id: 1, value: 65 },
          { id: 2, value: 45 },
          { id: 3, value: 35 },
        ],
        desc: `Disadvantage on ability checks made to climb or scale objects and ability checks made to maintain balance or keep one’s footing.
              The area becomes lightly obscured.
              Open flames are extinguished.
              Disadvantage on Wisdom (Perception) checks relying on hearing or scent.
              Disadvantage on Wisdom (Survival) checks to track creatures.
              Advantage on Wisdom (Survival) checks to forage for water.`,
        snowDesc: `The area becomes lightly obscured.
                  Advantage on Wisdom (Survival) checks to track creatures.
                  The area becomes difficult terrain.
                  Wisdom (Survival) checks to forage for water automatically succeed.`,
      },
    ],
    wind: [
      {
        id: 1,
        title: 'No Wind',
        desc: 'No additional effects.',
        probs: [
          { id: 1, value: 70 },
          { id: 2, value: 25 },
          { id: 3, value: 5 },
        ],
      },
      {
        id: 2,
        title: 'Low Winds',
        desc: `Clears light fog, smoke, or fumes.`,
        probs: [
          { id: 1, value: 50 },
          { id: 2, value: 35 },
          { id: 3, value: 15 },
        ],
      },
      {
        id: 3,
        title: 'High Winds',
        probs: [
          { id: 1, value: 40 },
          { id: 2, value: 30 },
          { id: 3, value: 30 },
        ],
        desc: `Disadvantage on ranged weapon attacks.
              Clears all fog, smoke, or fumes.
              Extinguishes open flames.
              Disadvantage on Wisdom (Perception) checks relying on hearing.
              Medium and smaller creatures with a fly speed must return to the ground at the end of their turn, or fall. Creatures with a hover speed have their speed halved.`,
      },
    ],
    weather: [
      {
        id: 1,
        title: 'Extreme Cold',
        lowerBound: -73,
        desc: `DC 10 Constitution save every hour, failure brings exhaustion.
        Resistance or immunity to cold, is natural adaption to cold-weather climates, or cold-weather gear means automatic success.
`,
      },
      { id: 2, title: 'Freezing', lowerBound: -18, desc: 'No additional effects.' },
      { id: 3, title: 'Cold', lowerBound: 0, desc: 'No additional effects.' },
      { id: 4, title: 'Cool', lowerBound: 9, desc: 'No additional effects.' },
      { id: 5, title: 'Temperate', lowerBound: 18, desc: 'No additional effects.' },
      { id: 6, title: 'Warm', lowerBound: 23, desc: 'No additional effects.' },
      { id: 7, title: 'Hot', lowerBound: 19, desc: 'No additional effects.' },
      {
        id: 8,
        title: 'Extreme heat',
        lowerBound: 38,
        desc: `Constitution save every hour, failure brings exhaustion.
        DC starts at 5 and increases by 1 every hour, or 2 if wearing medium or heavy armor.
        Insufficient water provokes disadvantage on this save.
        Resistance or immunity to fire damage, or being naturally adapted to hot-weather climates means automatic success.`,
      },
    ],
    tempStdDev: 2.69,
  };

  const els = {
    season: document.getElementById('current-season'),
    region: document.getElementById('current-region'),
    watch: document.getElementById('watch'),
    skies: document.getElementById('skies'),
    wind: document.getElementById('wind'),
    temp: document.getElementById('temp'),
    resultTable: document.getElementById('result-table-body'),
    generateBtn: document.getElementById('generate-button'),
  };

  const state = JSON.parse(localStorage.getItem('state')) || DEFAULT_STATE;

  let data = JSON.parse(localStorage.getItem('data')) || [];

  function erfcinv(p) {
    let j = 0;
    let x, err, t, pp;
    if (p >= 2) return -100;
    if (p <= 0) return 100;
    pp = p < 1 ? p : 2 - p;
    t = Math.sqrt(-2 * Math.log(pp / 2));
    x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);
    for (; j < 2; j++) {
      err = erfc(x) - pp;
      x += err / (1.12837916709551257 * Math.exp(-x * x) - x * err);
    }
    return p < 1 ? x : -x;
  }

  function erfc(x) {
    return 1 - erf(x);
  }

  function erf(x) {
    const cof = [
      -1.3026537197817094,
      6.4196979235649026e-1,
      1.9476473204185836e-2,
      -9.561514786808631e-3,
      -9.46595344482036e-4,
      3.66839497852761e-4,
      4.2523324806907e-5,
      -2.0278578112534e-5,
      -1.624290004647e-6,
      1.30365583558e-6,
      1.5626441722e-8,
      -8.5238095915e-8,
      6.529054439e-9,
      5.059343495e-9,
      -9.91364156e-10,
      -2.27365122e-10,
      9.6467911e-11,
      2.394038e-12,
      -6.886027e-12,
      8.94487e-13,
      3.13092e-13,
      -1.12708e-13,
      3.81e-16,
      7.106e-15,
      -1.523e-15,
      -9.4e-17,
      1.21e-16,
      -2.8e-17,
    ];
    let j = cof.length - 1;
    let isneg = false;
    let d = 0;
    let dd = 0;
    let t, ty, tmp, res;

    if (x < 0) {
      x = -x;
      isneg = true;
    }

    t = 2 / (2 + x);
    ty = 4 * t - 2;

    for (; j > 0; j--) {
      tmp = d;
      d = ty * d - dd + cof[j];
      dd = tmp;
    }

    res = t * Math.exp(-x * x + 0.5 * (cof[0] + ty * d) - dd);
    return isneg ? res - 1 : 1 - res;
  }

  function normInv(p, mean, sd) {
    return -1.41421356237309505 * sd * erfcinv(2 * p) + mean;
  }

  function setEventListener(name) {
    els[name].value = state[name];
    els[name].addEventListener('change', (e) => {
      state[name] = e.target.value;
      localStorage.setItem('state', JSON.stringify(state));
    });
  }

  function setOptions(name) {
    els[name].innerHTML = presetData[name].map((x) => {
      return `<option value="${x.id}">${x.title}</option>`;
    });
    setEventListener(name);
  }

  function generateWatchData(prev) {
    const res = {
      region: prev.region,
      season: prev.region,
    };

    res.watch = presetData.watch[prev.watch.id % presetData.watch.length];
    let windSum = 0,
      skiesSum = 0;
    prev.wind.probs = prev.wind.probs.map((x) => {
      x.value = x.value / (prev.region.windMult * prev.season.windMult);
      windSum += x.value;
      return x;
    });
    prev.skies.probs = prev.skies.probs.map((x) => {
      x.value = x.value / (prev.region.rainMult * prev.season.rainMult);
      skiesSum += x.value;
      return x;
    });

    const windRand = Math.random() * windSum,
      skiesRand = Math.random() * skiesSum;

    if (windRand < prev.wind.probs[0].value) {
      res.wind = presetData.wind[0];
    } else if (windRand < prev.wind.probs[0].value + prev.wind.probs[1].value) {
      res.wind = presetData.wind[1];
    } else {
      res.wind = presetData.wind[2];
    }

    if (skiesRand < prev.skies.probs[0].value) {
      res.skies = presetData.skies[0];
    } else if (skiesRand < prev.skies.probs[0].value + prev.skies.probs[1].value) {
      res.skies = presetData.skies[1];
    } else {
      res.skies = presetData.skies[2];
    }
    res.temp = normInv(
      Math.random(),
      (prev.temp + res.region.tempMod + res.season.tempMod + res.watch.tempMod) / 2,
      presetData.tempStdDev
    );

    if (res.temp <= presetData.weather[2].lowerBound && res.skies.title.indexOf('Rain') >= 0) {
      res.skies.title = res.skies.title.replace('Rain', 'Snow');
      res.skies.desc = res.skies.snowDesc;
    }

    if (res.skies.id === 3 && res.wind.id === 3) {
      res.storm = res.skies.title.indexOf('Snow') >= 0 ? 'Blizzard' : 'Storm';
    }

    res.weather = presetData.weather.find((x, i) =>
      i + 1 < presetData.weather.length ? presetData.weather[i + 1].lowerBound > res.temp : true
    );
    return res;
  }

  function showData() {
    els.resultTable.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      const hazards = `
        <ul>
          <li>
          <strong>${data[i].skies.title}:</strong>
          ${data[i].skies.desc}
          </li>
          <li>
          <strong>${data[i].wind.title}:</strong>
          ${data[i].wind.desc}
          </li>
          <li>
          <strong>${data[i].weather.title}:</strong>
          ${data[i].weather.desc}
          </li>
          ${
            data[i].storm
              ? '<li><strong>Storm: </strong> The area becomes heavily obscured. The area becomes difficult terrain. </li>'
              : ''
          }
        </ul>
      `;

      els.resultTable.innerHTML += `
        <tr>
          <td>${Math.floor((i + +state.watch) / 6) + 1}</td>
          <td>${data[i].watch.title}</td>
          <td>${data[i].skies.title}</td>
          <td>${data[i].wind.title}</td>
          <td title="${data[i].temp} ℃">${data[i].weather.title}</td>
          <td>${data[i].storm || ''}</td>
          <td>
            <button type="button" class="btn btn-outline-info"
              data-toggle="popover" data-trigger="focus"
              data-content="${hazards}"
            >Hazards</button>
          </td>
        </tr>
      `;
    }
    $('[data-toggle="popover"]').popover({
      html: true,
    });
  }

  function generateData() {
    console.log(123);

    data = [];
    const totalDays = 5 * 6 - state.watch;
    for (let i = 0; i < totalDays; i++) {
      if (i === 0) {
        data.push(
          generateWatchData({
            ...state,
            region: presetData.region[state.region - 1],
            season: presetData.season[state.season - 1],
            wind: presetData.wind[state.wind - 1],
            skies: presetData.skies[state.skies - 1],
            watch: presetData.watch[state.watch - 1],
          })
        );
      } else {
        data.push(generateWatchData(data[i - 1]));
      }
    }
    localStorage.setItem('data', JSON.stringify(data));
    showData();
  }

  function init() {
    setOptions('season');
    setOptions('region');
    setOptions('watch');
    setOptions('skies');
    setOptions('wind');
    els.temp.value = state.temp;
    els.temp.addEventListener('keyup', (e) => {
      state.temp = +e.target.value;
      localStorage.setItem('state', JSON.stringify(state));
    });
    if (data.length === 0) {
      generateData();
    } else {
      showData();
    }
    els.generateBtn.addEventListener('click', generateData);
  }

  init();
})();
