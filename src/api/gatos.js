const gatos = [
    {
      breed: 'Abyssinian',
      size: '7  -  10',
      coat: 'Coated',
      image: '0XYvRd7oD',
      characteristics: [ 'Active', 'Energetic', 'Independent', 'Intelligent', 'Gentle' ]
    },
    {
      breed: 'Aegean',
      size: '7 - 10',
      coat: 'Coated',
      image: 'ozEvzdVM-',
      characteristics: [ 'Affectionate', 'Social', 'Intelligent', 'Playful', 'Active' ]
    },
    {
      breed: 'American Bobtail',
      size: '7 - 16',
      coat: 'Coated',
      image: 'hBXicehMA',
      characteristics: [ 'Intelligent', 'Interactive', 'Lively', 'Playful', 'Sensitive' ]
    },
    {
      breed: 'American Curl',
      size: '5 - 10',
      coat: 'Coated',
      image: 'xnsqonbjW',
      characteristics: [
        'Affectionate',
        'Curious',
        'Intelligent',
        'Interactive',
        'Lively',
        'Playful',
        'Social'
      ]
    },
    {
      breed: 'American Shorthair',
      size: '8 - 15',
      coat: 'Coated',
      image: 'JFPROfGtQ',
      characteristics: [ 'Active', 'Curious', 'Easy Going', 'Playful', 'Calm' ]
    },
    {
      breed: 'American Wirehair',
      size: '8 - 15',
      coat: 'Coated',
      image: '8D--jCd21',
      characteristics: [
        'Affectionate', 'Curious',
        'Gentle',       'Intelligent',
        'Interactive',  'Lively',
        'Loyal',        'Playful',
        'Sensible',     'Social'
      ]
    },
    {
      breed: 'Arabian Mau',
      size: '8 - 16',
      coat: 'Coated',
      image: 'k71ULYfRr',
      characteristics: [
        'Affectionate',
        'Agile',
        'Curious',
        'Independent',
        'Playful',
        'Loyal'
      ]
    },
    {
      breed: 'Australian Mist',
      size: '7 - 15',
      coat: 'Coated',
      image: '_6x-3TiCA',
      characteristics: [ 'Lively', 'Social', 'Fun-loving', 'Relaxed', 'Affectionate' ]
    },
    {
      breed: 'Balinese',
      size: '4 - 10',
      coat: 'Coated',
      image: '13MkvUreZ',
      characteristics: [ 'Affectionate', 'Intelligent', 'Playful' ]
    },
    {
      breed: 'Bambino',
      size: '4 - 9',
      coat: 'Hairless',
      image: '5AdhMjeEu',
      characteristics: [ 'Affectionate', 'Lively', 'Friendly', 'Intelligent' ]
    },
    {
      breed: 'Bengal',
      size: '6 - 12',
      coat: 'Coated',
      image: 'O3btzLlsO',
      characteristics: [ 'Alert', 'Agile', 'Energetic', 'Demanding', 'Intelligent' ]
    },
    {
      breed: 'Birman',
      size: '6 - 15',
      coat: 'Coated',
      image: 'HOrX5gwLS',
      characteristics: [ 'Affectionate', 'Active', 'Gentle', 'Social' ]
    },
    {
      breed: 'Bombay',
      size: '6 - 11',
      coat: 'Coated',
      image: '5iYq9NmT1',
      characteristics: [ 'Affectionate', 'Dependent', 'Gentle', 'Intelligent', 'Playful' ]
    },
    {
      breed: 'British Longhair',
      size: '8 - 18',
      coat: 'Coated',
      image: '7isAO4Cav',
      characteristics: [
        'Affectionate',
        'Easy Going',
        'Independent',
        'Intelligent',
        'Loyal',
        'Social'
      ]
    },
    {
      breed: 'British Shorthair',
      size: '12 - 20',
      coat: 'Coated',
      image: 's4wQfYoEk',
      characteristics: [
        'Affectionate',
        'Easy Going',
        'Gentle',
        'Loyal',
        'Patient',
        'calm'
      ]
    },
    {
      breed: 'Burmese',
      size: '6 - 12',
      coat: 'Coated',
      image: '4lXnnfxac',
      characteristics: [
        'Curious',
        'Intelligent',
        'Gentle',
        'Social',
        'Interactive',
        'Playful',
        'Lively'
      ]
    },
    {
      breed: 'Burmilla',
      size: '6 - 13',
      coat: 'Coated',
      image: 'jvg3XfEdC',
      characteristics: [
        'Easy Going',
        'Friendly',
        'Intelligent',
        'Lively',
        'Playful',
        'Social'
      ]
    },
    {
      breed: 'California Spangled',
      size: '10 - 15',
      coat: 'Coated',
      image: 'B1ERTmgph',
      characteristics: [ 'Affectionate', 'Curious', 'Intelligent', 'Loyal', 'Social' ]
    },
    {
      breed: 'Chantilly-Tiffany',
      size: '7 - 12',
      coat: 'Coated',
      image: 'TR-5nAd_S',
      characteristics: [ 'Affectionate', 'Demanding', 'Interactive', 'Loyal' ]
    },
    {
      breed: 'Chartreux',
      size: '6 - 15',
      coat: 'Coated',
      image: 'j6oFGLpRG',
      characteristics: [
        'Affectionate',
        'Loyal',
        'Intelligent',
        'Social',
        'Lively',
        'Playful'
      ]
    },
    {
      breed: 'Chausie',
      size: '7 - 15',
      coat: 'Coated',
      image: 'vJ3lEYgXr',
      characteristics: [ 'Affectionate', 'Intelligent', 'Playful', 'Social' ]
    },
    {
      breed: 'Cheetoh',
      size: '8 - 15',
      coat: 'Coated',
      image: 'IFXsxmXLm',
      characteristics: [ 'Affectionate', 'Gentle', 'Intelligent', 'Social' ]
    },
    {
      breed: 'Colorpoint Shorthair',
      size: '4 - 10',
      coat: 'Coated',
      image: 'oSpqGyUDS',
      characteristics: [ 'Affectionate', 'Intelligent', 'Playful', 'Social' ]
    },
    {
      breed: 'Cornish Rex',
      size: '5 - 9',
      coat: 'Coated',
      image: 'unX21IBVB',
      characteristics: [ 'Affectionate', 'Intelligent', 'Active', 'Curious', 'Playful' ]
    },
    {
      breed: 'Cymric',
      size: '8 - 13',
      coat: 'Coated',
      image: '3dbtapCWM',
      characteristics: [ 'Gentle', 'Loyal', 'Intelligent', 'Playful' ]
    },
    {
      breed: 'Cyprus',
      size: '8 - 16',
      coat: 'Coated',
      image: 'tJbzb7FKo',
      characteristics: [ 'Affectionate', 'Social' ]
    },
    {
      breed: 'Devon Rex',
      size: '5 - 10',
      coat: 'Coated',
      image: '4RzEwvyzz',
      characteristics: [
        'Highly interactive',
        'Mischievous',
        'Loyal',
        'Social',
        'Playful'
      ]
    },
    {
      breed: 'Donskoy',
      size: '10 - 12',
      coat: 'Hairless',
      image: '3KG57GfMW',
      characteristics: [ 'Playful', 'affectionate', 'loyal', 'social' ]
    },
    {
      breed: 'Dragon Li',
      size: '9 - 12',
      coat: 'Coated',
      image: 'BQMSld0A0',
      characteristics: [ 'Intelligent', 'Friendly', 'Gentle', 'Loving', 'Loyal' ]
    },
    {
      breed: 'Egyptian Mau',
      size: '6 - 14',
      coat: 'Coated',
      image: 'TuSyTkt2n',
      characteristics: [
        'Agile',
        'Dependent',
        'Gentle',
        'Intelligent',
        'Lively',
        'Loyal',
        'Playful'
      ]
    },
    {
      breed: 'European Burmese',
      size: '7 - 14',
      coat: 'Coated',
      image: null,
      characteristics: [ 'Sweet', 'Affectionate', 'Loyal' ]
    },
    {
      breed: 'Exotic Shorthair',
      size: '7 - 14',
      coat: 'Coated',
      image: 'YnPrYEmfe',
      characteristics: [ 'Affectionate', 'Sweet', 'Loyal', 'Quiet', 'Peaceful' ]
    },
    {
      breed: 'Havana Brown',
      size: '6 - 10',
      coat: 'Coated',
      image: 'njK25knLH',
      characteristics: [
        'Affectionate',
        'Curious',
        'Demanding',
        'Friendly',
        'Intelligent',
        'Playful'
      ]
    },
    {
      breed: 'Himalayan',
      size: '7 - 14',
      coat: 'Coated',
      image: 'CDhOtM-Ig',
      characteristics: [ 'Dependent', 'Gentle', 'Intelligent', 'Quiet', 'Social' ]
    },
    {
      breed: 'Japanese Bobtail',
      size: '5 - 10',
      coat: 'Coated',
      image: '-tm9-znzl',
      characteristics: [
        'Active',      'Agile',
        'Clever',      'Easy Going',
        'Intelligent', 'Lively',
        'Loyal',       'Playful',
        'Social'
      ]
    },
    {
      breed: 'Javanese',
      size: '5 - 10',
      coat: 'Coated',
      image: 'xoI_EpOKe',
      characteristics: [ 'Active', 'Devoted', 'Intelligent', 'Playful' ]
    },
    {
      breed: 'Khao Manee',
      size: '8 - 12',
      coat: 'Coated',
      image: '165ok6ESN',
      characteristics: [ 'Calm', 'Relaxed', 'Talkative', 'Playful', 'Warm' ]
    },
    {
      breed: 'Korat',
      size: '7 - 11',
      coat: 'Coated',
      image: 'DbwiefiaY',
      characteristics: [
        'Active',
        'Loyal',
        'highly intelligent',
        'Expressive',
        'Trainable'
      ]
    },
    {
      breed: 'Kurilian',
      size: '8 - 15',
      coat: 'Coated',
      image: 'NZpO4pU56M',
      characteristics: [
        'Independent',
        'highly intelligent',
        'clever',
        'inquisitive',
        'sociable',
        'playful',
        'trainable'
      ]
    },
    {
      breed: 'LaPerm',
      size: '6 - 10',
      coat: 'Coated',
      image: 'aKbsEYjSl',
      characteristics: [
        'Affectionate',
        'Friendly',
        'Gentle',
        'Intelligent',
        'Playful',
        'Quiet'
      ]
    },
    {
      breed: 'Maine Coon',
      size: '12 - 18',
      coat: 'Coated',
      image: 'OOD3VXAQn',
      characteristics: [ 'Adaptable', 'Intelligent', 'Loving', 'Gentle', 'Independent' ]
    },
    {
      breed: 'Malayan',
      size: '6 - 13',
      coat: 'Coated',
      image: null,
      characteristics: [ 'Affectionate', 'Interactive', 'Playful', 'Social' ]
    },
    {
      breed: 'Manx',
      size: '7 - 13',
      coat: 'Coated',
      image: 'fhYh2PDcC',
      characteristics: [ 'Easy Going', 'Intelligent', 'Loyal', 'Playful', 'Social' ]
    },
    {
      breed: 'Munchkin',
      size: '5 - 9',
      coat: 'Coated',
      image: 'j5cVSqLer',
      characteristics: [ 'Agile', 'Easy Going', 'Intelligent', 'Playful' ]
    },
    {
      breed: 'Nebelung',
      size: '7 - 11',
      coat: 'Coated',
      image: 'OGTWqNNOt',
      characteristics: [ 'Gentle', 'Quiet', 'Shy', 'Playful' ]
    },
    {
      breed: 'Norwegian Forest Cat',
      size: '8 - 16',
      coat: 'Coated',
      image: '06dgGmEOV',
      characteristics: [
        'Sweet',
        'Active',
        'Intelligent',
        'Social',
        'Playful',
        'Lively',
        'Curious'
      ]
    },
    {
      breed: 'Ocicat',
      size: '7 - 15',
      coat: 'Coated',
      image: 'JAx-08Y0n',
      characteristics: [
        'Active',   'Agile',
        'Curious',  'Demanding',
        'Friendly', 'Gentle',
        'Lively',   'Playful',
        'Social'
      ]
    },
    {
      breed: 'Oriental',
      size: '5 - 10',
      coat: 'Coated',
      image: 'LutjkZJpH',
      characteristics: [
        'Energetic',
        'Affectionate',
        'Intelligent',
        'Social',
        'Playful',
        'Curious'
      ]
    },
    {
      breed: 'Persian',
      size: '9 - 14',
      coat: 'Coated',
      image: '-Zfz5z2jK',
      characteristics: [ 'Affectionate', 'loyal', 'Sedate', 'Quiet' ]
    },
    {
      breed: 'Pixie-bob',
      size: '8 - 17',
      coat: 'Coated',
      image: 'z7fJRNeN6',
      characteristics: [ 'Affectionate', 'Social', 'Intelligent', 'Loyal' ]
    },
    {
      breed: 'Ragamuffin',
      size: '8 - 20',
      coat: 'Coated',
      image: 'SMuZx-bFM',
      characteristics: [ 'Affectionate', 'Friendly', 'Gentle', 'Calm' ]
    },
    {
      breed: 'Ragdoll',
      size: '12 - 20',
      coat: 'Coated',
      image: 'oGefY4YoG',
      characteristics: [ 'Affectionate', 'Friendly', 'Gentle', 'Quiet', 'Easygoing' ]
    },
    {
      breed: 'Russian Blue',
      size: '5 - 11',
      coat: 'Coated',
      image: 'Rhj-JsTLP',
      characteristics: [
        'Active',
        'Dependent',
        'Easy Going',
        'Gentle',
        'Intelligent',
        'Loyal',
        'Playful',
        'Quiet'
      ]
    },
    {
      breed: 'Savannah',
      size: '8 - 25',
      coat: 'Coated',
      image: 'a8nIYvs6S',
      characteristics: [
        'Curious',
        'Social',
        'Intelligent',
        'Loyal',
        'Outgoing',
        'Adventurous',
        'Affectionate'
      ]
    },
    {
      breed: 'Scottish Fold',
      size: '5 - 11',
      coat: 'Coated',
      image: 'o9t0LDcsa',
      characteristics: [
        'Affectionate',
        'Intelligent',
        'Loyal',
        'Playful',
        'Social',
        'Sweet',
        'Loving'
      ]
    },
    {
      breed: 'Selkirk Rex',
      size: '6 - 16',
      coat: 'Coated',
      image: 'II9dOZmrw',
      characteristics: [
        'Active',
        'Affectionate',
        'Dependent',
        'Gentle',
        'Patient',
        'Playful',
        'Quiet',
        'Social'
      ]
    },
    {
      breed: 'Siamese',
      size: '8 - 15',
      coat: 'Coated',
      image: 'ai6Jps4sx',
      characteristics: [ 'Active', 'Agile', 'Clever', 'Sociable', 'Loving', 'Energetic' ]
    },
    {
      breed: 'Siberian',
      size: '8 - 16',
      coat: 'Coated',
      image: '3bkZAjRh1',
      characteristics: [
        'Curious',
        'Intelligent',
        'Loyal',
        'Sweet',
        'Agile',
        'Playful',
        'Affectionate'
      ]
    },
    {
      breed: 'Singapura',
      size: '5 - 8',
      coat: 'Coated',
      image: 'Qtncp2nRe',
      characteristics: [
        'Affectionate',
        'Curious',
        'Easy Going',
        'Intelligent',
        'Interactive',
        'Lively',
        'Loyal'
      ]
    },
    {
      breed: 'Snowshoe',
      size: '7 - 12',
      coat: 'Coated',
      image: 'MK-sYESvO',
      characteristics: [ 'Affectionate', 'Social', 'Intelligent', 'Sweet-tempered' ]
    },
    {
      breed: 'Somali',
      size: '6 - 12',
      coat: 'Coated',
      image: 'EPF2ejNS0',
      characteristics: [
        'Mischievous',
        'Tenacious',
        'Intelligent',
        'Affectionate',
        'Gentle',
        'Interactive',
        'Loyal'
      ]
    },
    {
      breed: 'Sphynx',
      size: '6 - 12',
      coat: 'Hairless',
      image: 'BDb8ZXb1v',
      characteristics: [ 'Loyal', 'Inquisitive', 'Friendly', 'Quiet', 'Gentle' ]
    },
    {
      breed: 'Tonkinese',
      size: '6 - 12',
      coat: 'Coated',
      image: 'KBroiVNCM',
      characteristics: [
        'Curious',
        'Intelligent',
        'Social',
        'Lively',
        'Outgoing',
        'Playful',
        'Affectionate'
      ]
    },
    {
      breed: 'Toyger',
      size: '7 - 15',
      coat: 'Coated',
      image: 'O3F3_S1XN',
      characteristics: [ 'Playful', 'Social', 'Intelligent' ]
    },
    {
      breed: 'Turkish Angora',
      size: '5 - 10',
      coat: 'Coated',
      image: '7CGV6WVXq',
      characteristics: [
        'Affectionate',
        'Agile',
        'Clever',
        'Gentle',
        'Intelligent',
        'Playful',
        'Social'
      ]
    },
    {
      breed: 'Turkish Van',
      size: '7 - 20',
      coat: 'Coated',
      image: 'sxIXJax6h',
      characteristics: [ 'Agile', 'Intelligent', 'Loyal', 'Playful', 'Energetic' ]
    },
    {
      breed: 'York Chocolate',
      size: '12 - 18',
      coat: 'Coated',
      image: '0SxW2SQ_S',
      characteristics: [ 'Playful', 'Social', 'Intelligent', 'Curious', 'Friendly' ]
    }
  ]

  export default gatos