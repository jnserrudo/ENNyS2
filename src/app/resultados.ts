export let alimentos=[
  {
   "GRASAS": 121131,
   "HUEVOS": 450462.10000000347,
   "ACEITES": 543794.8399999997,
   "YOGUR_POSTRESdLECHE": 1485611,
   "LEGUMBRES_CEREALES": 6982816.703758742,
   "VERDURAS": 2816154.0174245015,
   "QUESOS": 654555,
   "PESCADOS": 118508.36238619998,
   "OPCIONALES_MISCELANEOS": 374401,
   "LECHE": 6923496.280000002,
   "FRUTAS": 1868587.410000006,
   "DULCES": 1517448.1600000004,
   "BEBIDAS_AGUA": 42959058.24000003,
   "CARNES": 5138238.581514159
  }
 ]

 export let alimentosxregion=[
  {
   "REGION": "Centro",
   "ACEITES": 103536.85,
   "BEBIDAS_AGUA": 7584824.36,
   "CARNES": 981761.6644237983,
   "DULCES": 288166.73999999993,
   "FRUTAS": 358054.4799999996,
   "GRASAS": 28248,
   "HUEVOS": 85906.82999999991,
   "LECHE": 1230069.3800000001,
   "LEGUMBRES_CEREALES": 1255672.674082803,
   "OPCIONALES_MISCELANEOS": 74096,
   "PESCADOS": 31112.559365799993,
   "QUESOS": 128696,
   "VERDURAS": 527317.4233390999,
   "YOGUR_POSTRESdLECHE": 264851
  },
  {
   "REGION": "Cuyo",
   "ACEITES": 102837.45000000003,
   "BEBIDAS_AGUA": 7137686.700000001,
   "CARNES": 891044.8595060991,
   "DULCES": 261394.75000000003,
   "FRUTAS": 288799.30000000016,
   "GRASAS": 17644,
   "HUEVOS": 64152.85999999994,
   "LECHE": 1077230.5,
   "LEGUMBRES_CEREALES": 1185256.2700739,
   "OPCIONALES_MISCELANEOS": 71682,
   "PESCADOS": 9363.9661086,
   "QUESOS": 114367,
   "VERDURAS": 469471.71394750034,
   "YOGUR_POSTRESdLECHE": 238482
  },
  {
   "REGION": "GBA",
   "ACEITES": 69894.03000000003,
   "BEBIDAS_AGUA": 5243177.68,
   "CARNES": 693205.0961762987,
   "DULCES": 198559.41999999995,
   "FRUTAS": 273754.3999999996,
   "GRASAS": 17518,
   "HUEVOS": 59620.02999999995,
   "LECHE": 1170161.7000000002,
   "LEGUMBRES_CEREALES": 884560.9256657035,
   "OPCIONALES_MISCELANEOS": 49370,
   "PESCADOS": 22191.5388714,
   "QUESOS": 99476,
   "VERDURAS": 375156.2890177,
   "YOGUR_POSTRESdLECHE": 174919
  },
  {
   "REGION": "NEA",
   "ACEITES": 95970.39999999998,
   "BEBIDAS_AGUA": 8555477.7,
   "CARNES": 816453.3016853993,
   "DULCES": 256309.25,
   "FRUTAS": 282071.6500000001,
   "GRASAS": 18447,
   "HUEVOS": 86023.2099999999,
   "LECHE": 1192667.1,
   "LEGUMBRES_CEREALES": 1279519.3864008011,
   "OPCIONALES_MISCELANEOS": 59372,
   "PESCADOS": 15629.4242793,
   "QUESOS": 86479,
   "VERDURAS": 508102.2388753006,
   "YOGUR_POSTRESdLECHE": 280207
  },
  {
   "REGION": "NOA",
   "ACEITES": 96549.8,
   "BEBIDAS_AGUA": 8265772.25,
   "CARNES": 976689.4495508956,
   "DULCES": 301889.70000000007,
   "FRUTAS": 337571.5599999998,
   "GRASAS": 15179,
   "HUEVOS": 85208.48999999998,
   "LECHE": 1107834.0999999999,
   "LEGUMBRES_CEREALES": 1315847.7955762022,
   "OPCIONALES_MISCELANEOS": 64714,
   "PESCADOS": 17437.849620700003,
   "QUESOS": 112155,
   "VERDURAS": 479285.2221119001,
   "YOGUR_POSTRESdLECHE": 317671
  },
  {
   "REGION": "Patagonia",
   "ACEITES": 75006.31000000001,
   "BEBIDAS_AGUA": 6172119.550000001,
   "CARNES": 779084.2101715978,
   "DULCES": 211128.30000000005,
   "FRUTAS": 328336.0199999995,
   "GRASAS": 24095,
   "HUEVOS": 69550.67999999996,
   "LECHE": 1145533.4999999998,
   "LEGUMBRES_CEREALES": 1061959.6519592034,
   "OPCIONALES_MISCELANEOS": 55167,
   "PESCADOS": 22773.024140399993,
   "QUESOS": 113382,
   "VERDURAS": 456821.1301330008,
   "YOGUR_POSTRESdLECHE": 209481
  }
 ]
export let datos=[
  {
    "region":"NOA",
    "resultados":
    [
      {
       "Premises": "GRASAS = [0.0 - 0.0], CARNES = [0.0 - 223.1]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.37185034359888,
       "Confidence": 0.893577981651376,
       "Lift": 1.15072693867855
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 27.7]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.396029524051921,
       "Confidence": 0.891179839633447,
       "Lift": 1.14763867254009
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 27.7]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.406210231611097,
       "Confidence": 0.914089347079037,
       "Lift": 1.14268439219648
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], CARNES = [0.0 - 223.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.380249427335199,
       "Confidence": 0.913761467889908,
       "Lift": 1.14227451712995
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0], CARNES = [0.0 - 223.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.37185034359888,
       "Confidence": 0.913125,
       "Lift": 1.14147888164174
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 27.7]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.396029524051921,
       "Confidence": 0.912609970674486,
       "Lift": 1.14083505401847
      },
      {
       "Premises": "CARNES = [0.0 - 223.1]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.426317129040468,
       "Confidence": 0.8834388185654,
       "Lift": 1.13766998300342
      },
      {
       "Premises": "ACEITES = [0.0 - 27.7]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.453550521761262,
       "Confidence": 0.883052527254707,
       "Lift": 1.13717252690388
      },
      {
       "Premises": "ACEITES = [0.0 - 27.7]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.466276406210231,
       "Confidence": 0.907829534192269,
       "Lift": 1.13485912817099
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], CARNES = [0.0 - 223.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 50.0]",
       "Support": 0.426317129040468,
       "Confidence": 0.907367280606717,
       "Lift": 1.13428127442055
      }
     ]
  },
  {
    "region":"NEA",
    "resultados":
    [
      {
        "Premises": "PESCADOS = [0.0 - 0.0], LEGUMBRES_CEREALES = [0.0 - 269.2]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.427777777777777,
        "Confidence": 0.867605633802816,
        "Lift": 1.27797883866208
       },
       {
        "Premises": "LEGUMBRES_CEREALES = [0.0 - 269.2]",
        "Conclusion": "PESCADOS = [0.0 - 0.0], BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.427777777777777,
        "Confidence": 0.855080510827318,
        "Lift": 1.27782890783659
       },
       {
        "Premises": "LEGUMBRES_CEREALES = [0.0 - 269.2]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.433611111111111,
        "Confidence": 0.866740699611327,
        "Lift": 1.27670479484483
       },
       {
        "Premises": "CARNES = [0.0 - 223.1]",
        "Conclusion": "PESCADOS = [0.0 - 0.0], BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.42,
        "Confidence": 0.838602329450915,
        "Lift": 1.25320397925416
       },
       {
        "Premises": "PESCADOS = [0.0 - 0.0], CARNES = [0.0 - 223.1]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.42,
        "Confidence": 0.849915682967959,
        "Lift": 1.25192162793971
       },
       {
        "Premises": "CARNES = [0.0 - 223.1]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.424722222222222,
        "Confidence": 0.848031059345535,
        "Lift": 1.24914558659735
       },
       {
        "Premises": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 76.9], ACEITES = [0.0 - 38.5]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.438333333333333,
        "Confidence": 0.810894141829393,
        "Lift": 1.19444308943773
       },
       {
        "Premises": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 38.5]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.409166666666666,
        "Confidence": 0.81023102310231,
        "Lift": 1.19346631880864
       },
       {
        "Premises": "OPCIONALES_MISCELANEOS = [0.0 - 76.9], ACEITES = [0.0 - 38.5]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.442777777777777,
        "Confidence": 0.807906741003547,
        "Lift": 1.19004266268935
       },
       {
        "Premises": "GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 38.5]",
        "Conclusion": "BEBIDAS_AGUA = [0.0 - 2619.2]",
        "Support": 0.413888888888888,
        "Confidence": 0.807588075880758,
        "Lift": 1.18957327052812
       }
     ]
  },
  {
    "region":"CUYO",
    "resultados":
    [
      {
       "Premises": "LEGUMBRES_CEREALES = [0.0 - 238.5]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.412702630879617,
       "Confidence": 0.846782988004362,
       "Lift": 1.15997247319272
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], LEGUMBRES_CEREALES = [0.0 - 238.5]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.364868456019133,
       "Confidence": 0.865699873896595,
       "Lift": 1.15971115182374
      },
      {
       "Premises": "LEGUMBRES_CEREALES = [0.0 - 238.5]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.421472229604039,
       "Confidence": 0.864776444929116,
       "Lift": 1.15847410547108
      },
      {
       "Premises": "ACEITES = [0.0 - 23.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.36088227478076,
       "Confidence": 0.863318499682136,
       "Lift": 1.15652100900814
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], LEGUMBRES_CEREALES = [0.0 - 238.5]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.412702630879617,
       "Confidence": 0.86325736520289,
       "Lift": 1.15643911187557
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], DULCES = [0.0 - 76.9]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.372575073079989,
       "Confidence": 0.861179361179361,
       "Lift": 1.1536553706365
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], DULCES = [0.0 - 76.9]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.43183630082381,
       "Confidence": 0.861155272919978,
       "Lift": 1.15362310145883
      },
      {
       "Premises": "DULCES = [0.0 - 76.9]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.441668881211799,
       "Confidence": 0.861139896373057,
       "Lift": 1.15360250268843
      },
      {
       "Premises": "DULCES = [0.0 - 76.9]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.43183630082381,
       "Confidence": 0.841968911917098,
       "Lift": 1.15337787242229
      },
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], DULCES = [0.0 - 76.9]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 46.2]",
       "Support": 0.360616529364868,
       "Confidence": 0.860494610019023,
       "Lift": 1.15273806247831
      }
     ]
  },
  {
    "region":"CENTRO",
    "resultados":
    [
      {
       "Premises": "PESCADOS = [0.0 - 0.0], LEGUMBRES_CEREALES = [0.0 - 223.1]",
       "Conclusion": "BEBIDAS_AGUA = [0.0 - 1884.6]",
       "Support": 0.339280812517156,
       "Confidence": 0.825100133511348,
       "Lift": 1.32124825775026
      },
      {
       "Premises": "LEGUMBRES_CEREALES = [0.0 - 223.1]",
       "Conclusion": "BEBIDAS_AGUA = [0.0 - 1884.6]",
       "Support": 0.352456766401317,
       "Confidence": 0.820971867007672,
       "Lift": 1.31463758747646
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], BEBIDAS_AGUA = [0.0 - 1884.6], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.339829810595662,
       "Confidence": 0.83254875588433,
       "Lift": 1.14755017695293
      },
      {
       "Premises": "BEBIDAS_AGUA = [0.0 - 1884.6], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.353280263519077,
       "Confidence": 0.831395348837209,
       "Lift": 1.14596036920694
      },
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.367005215481745,
       "Confidence": 0.828376703841387,
       "Lift": 1.14179959594936
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.351358770244304,
       "Confidence": 0.827943078913324,
       "Lift": 1.1412019055926
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.443041449354927,
       "Confidence": 0.823049464558898,
       "Lift": 1.13445675345746
      },
      {
       "Premises": "ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.462530881141916,
       "Confidence": 0.82275390625,
       "Lift": 1.13404936831961
      },
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], DULCES = [0.0 - 107.7]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.358770244304144,
       "Confidence": 0.819435736677116,
       "Lift": 1.12947574298703
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0], ACEITES = [0.0 - 33.1]",
       "Conclusion": "OPCIONALES_MISCELANEOS = [0.0 - 57.7]",
       "Support": 0.342300301948943,
       "Confidence": 0.819316688567674,
       "Lift": 1.12931165208173
      }
     ]
  },
  {
    "region":"GBA",
    "resultados":
    [
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0]",
       "Support": 0.409494535519125,
       "Confidence": 0.817314246762099,
       "Lift": 1.10433600116263
      },
      {
       "Premises": "HUEVOS = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0]",
       "Support": 0.500341530054644,
       "Confidence": 0.808052950910093,
       "Lift": 1.09182235360625
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.409494535519125,
       "Confidence": 0.844366197183098,
       "Lift": 1.09104334746342
      },
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.421106557377049,
       "Confidence": 0.840490797546012,
       "Lift": 1.08603577017419
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.500341530054644,
       "Confidence": 0.837142857142857,
       "Lift": 1.08170974656411
      },
      {
       "Premises": "HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.51639344262295,
       "Confidence": 0.833976833976834,
       "Lift": 1.07761878635665
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.401639344262295,
       "Confidence": 0.817234190410007,
       "Lift": 1.0620779891347
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.401639344262295,
       "Confidence": 0.820655966503838,
       "Lift": 1.06040629740654
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.479508196721311,
       "Confidence": 0.818658892128279,
       "Lift": 1.05782578823989
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], QUESOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.416325136612021,
       "Confidence": 0.818120805369127,
       "Lift": 1.05713050225984
      }
     ]
  },
  {
    "region":"PATAGONIA",
    "resultados":
    [
      {
       "Premises": "PESCADOS = [0.0 - 0.0], LECHE = [0.0 - 0.0]",
       "Conclusion": "YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.338952438290186,
       "Confidence": 0.881064162754303,
       "Lift": 1.11204222973776
      },
      {
       "Premises": "LECHE = [0.0 - 0.0]",
       "Conclusion": "YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.356110776640577,
       "Confidence": 0.878247958426132,
       "Lift": 1.10848773476125
      },
      {
       "Premises": "LECHE = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.338952438290186,
       "Confidence": 0.835931700074239,
       "Lift": 1.10768452638477
      },
      {
       "Premises": "YOGUR_POSTRESdLECHE = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.407585791691751,
       "Confidence": 0.813213213213213,
       "Lift": 1.0986150037797
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0], HUEVOS = [0.0 - 0.0]",
       "Conclusion": "GRASAS = [0.0 - 0.0]",
       "Support": 0.394641782059,
       "Confidence": 0.812267657992565,
       "Lift": 1.09733760059019
      },
      {
       "Premises": "FRUTAS = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.449127031908488,
       "Confidence": 0.807359307359307,
       "Lift": 1.06982354170228
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "PESCADOS = [0.0 - 0.0], YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.350090307043949,
       "Confidence": 0.806518723994452,
       "Lift": 1.06870969330258
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], GRASAS = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.350090307043949,
       "Confidence": 0.836690647482014,
       "Lift": 1.05603584002099
      },
      {
       "Premises": "PESCADOS = [0.0 - 0.0], FRUTAS = [0.0 - 0.0]",
       "Conclusion": "YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.449127031908488,
       "Confidence": 0.83538633818589,
       "Lift": 1.05438959553705
      },
      {
       "Premises": "GRASAS = [0.0 - 0.0], DULCES = [0.0 - 103.8]",
       "Conclusion": "YOGUR_POSTRESdLECHE = [0.0 - 0.0]",
       "Support": 0.33774834437086,
       "Confidence": 0.832962138084632,
       "Lift": 1.05132987185302
      }
     ]
  }
]
