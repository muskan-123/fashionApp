import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get(
    "window"
);
const AppImages = {
    bg1: {
        source: require('./fashion3.jpg'),
        style: {
            flex: 1, width: width, height: '100%',
            backfaceVisibility: 'visible'
        }
    },
    bg2: {
        source: require('./fashion2.jpg'),
        style: {
            flex: 1,
            backfaceVisibility: 'visible'
        }
    },
    bg3: {
        source: require('./fashion4.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg4: {
        source: require('./fashion5.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg5: {
        source: require('./fashion6.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg6: {
        source: require('./fashion7.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg7: {
        source: require('./fashion8.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg8: {
        source: require('./fashion9.jpeg'),
        style: {

            backfaceVisibility: 'visible'
        }
    },
    bg9: {
        source: require('./fashion10.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg10: {
        source: require('./fashion11.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg11: {
        source: require('./fashion12.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg12: {
        source: require('./fashion13.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg13: {
        source: require('./fashion14.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg14: {
        source: require('./fashion15.jpeg'),
        style: {
            flex: 1,
            backfaceVisibility: 'visible'
        }
    },
    bg15: {
        source: require('./fashion16.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg16: {
        source: require('./fashion17.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    },
    bg17: {
        source: require('./fashion18.jpeg'),
        style: {
            flex: 1, width: null, height: null,
            backfaceVisibility: 'visible'
        }
    }


}

module.exports = {
    AppImages
}