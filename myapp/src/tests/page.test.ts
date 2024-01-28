import { describe, expect, test } from '@jest/globals';

describe('group module', () => {
    test('the data is grouped data', async () => {
        const group = await require('../services/groupedData');
        expect(group).toStrictEqual(outputMock);
    });
});

const outputMock = {
    "Accounting": {
        "addressUser": {
            "AlisonReichert": "05452"
        },
        "ageRange": "21-21",
        "female": 1,
        "hair": {
            "Blond": 1
        },
        "male": 0
    },
    "Business Development": {
        "addressUser": {
            "MarcelJones": "40208",
            "MilesCummerata": "06040"
        },
        "ageRange": "39-49",
        "female": 0,
        "hair": {
            "Black": 1,
            "Blond": 1
        },
        "male": 2
    },
    "Engineering": {
        "addressUser": {
            "GriffinBraun": "99503"
        },
        "ageRange": "35-35",
        "female": 0,
        "hair": {
            "Blond": 1
        },
        "male": 1
    },
    "Human Resources": {
        "addressUser": {
            "DemetriusCorkery": "37209",
            "PiperSchowalter": "37013"
        },
        "ageRange": "22-47",
        "female": 1,
        "hair": {
            "Black": 1,
            "Brown": 1
        },
        "male": 1
    },
    "Legal": {
        "addressUser": {
            "FelicityO'Reilly": "37211"
        },
        "ageRange": "46-46",
        "female": 1,
        "hair": {
            "Brown": 1
        },
        "male": 0
    },
    "Marketing": {
        "addressUser": {
            "EdwinaErnser": "31415",
            "EleanoraPrice": "85305",
            "JeanneHalvorson": "02664",
            "TerrillHills": "95945",
            "TerryMedhurst": "20020"
        },
        "ageRange": "21-50",
        "female": 3,
        "hair": {
            "Black": 1,
            "Blond": 2,
            "Brown": 1,
            "Chestnut": 1
        },
        "male": 2
    },
    "Product Management": {
        "addressUser": {
            "AssuntaRath": "80003",
            "DoyleErnser": "72704",
            "JocelynSchuster": "36111",
            "MacyGreenfelder": "93645",
            "OletaAbbott": "94591"
        },
        "ageRange": "19-45",
        "female": 3,
        "hair": {
            "Black": 3,
            "Brown": 1,
            "Chestnut": 1
        },
        "male": 2
    },
    "Research and Development": {
        "addressUser": {
            "TraceDouglas": "05037",
            "TressaWeber": "72703",
            "TryciaFadel": "37206"
        },
        "ageRange": "26-41",
        "female": 2,
        "hair": {
            "Auburn": 1,
            "Black": 2
        },
        "male": 1
    },
    "Sales": {
        "addressUser": {
            "BradfordProhaska": "72704",
            "EnochLynch": "06040",
            "GustPurdy": "37076"
        },
        "ageRange": "21-46",
        "female": 0,
        "hair": {
            "Auburn": 1,
            "Black": 2
        },
        "male": 3
    },
    "Services": {
        "addressUser": {
            "EwellMueller": "85306",
            "SheldonQuigley": "40219"
        },
        "ageRange": "28-29",
        "female": 0,
        "hair": {
            "Blond": 1,
            "Chestnut": 1
        },
        "male": 2
    },
    "Support": {
        "addressUser": {
            "ArelySkiles": "36108",
            "KodyTerry": "06042",
            "LennaRenner": "93908",
            "MaurineStracke": "20001",
            "MavisSchultz": "40206"
        },
        "ageRange": "28-42",
        "female": 2,
        "hair": {
            "Black": 1,
            "Blond": 1,
            "Brown": 3
        },
        "male": 3
    }
}