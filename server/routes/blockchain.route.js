const express = require('express');
const path = require('path');
const espress = require('express');
const request = require('request');
// const cjson = require('cjson');
const EVT = require('evtjs');
// const apiCaller = require('../config/config.everi');
const { apiCaller, pubKey } = require('../config/config.everi');

const router = express.Router();

router.get('/test', async (req, res) => {
    const info = await apiCaller.getInfo();
    res.send(info);
});

const tempdata = {
    cmnd: '272727272',
    fingerprint: '0xaas893209dsaf',
    info: [true, true]
};

router.get('/trans', async (req, res, next) => {
    try {
        const a = await apiCaller.pushTransaction(
            { maxCharge: 100000 },
            new EVT.EvtAction('addmeta', {
                'key': tempdata.cmnd,
                'value': tempdata.info,
                'creator': pubKey
            }, '.domain', 'mydomain')
        );

        return res.send(typeof a);
    } catch (err) {
        return next(err);
    }
});

router.get('/createdomain', async (req, res, next) => {
    try {
        await apiCaller.pushTransaction(
            { maxCharge: 10000, payer: pubKey },
            new EVT.EvtAction('newdomain',
            {
                'name': 'mynewdomain',
                'creator': pubKey,
                'issue': {
                    'name': 'issue',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': pubKey,
                        'weight': 1
                    }]
                },
                'transfer': {
                    'name': 'transfer',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': pubKey,
                        'weight': 1
                    }]
                },
                'manage': {
                    'name': 'manage',
                    'threshold': 1,
                    'authorizers': [{
                        'ref': pubKey,
                        'weight': 1
                    }]
                }
            })
        );
    } catch (err) {
        return next(err);
    }
});

router.get('/groups', async (req, res) => {
    const a = await apiCaller.getManagedGroups(pubKey);
    res.send(a);
});

router.get('/groups/:name', async (req, res) => {
    const a = await apiCaller.getGroupDetail(req.params.name);
    res.send(a);
});

router.get('/abc', async (req, res) => {
    const a = await apiCaller.getTransactionsDetailOfPublicKeys(pubKey);
    res.send(a);
});

module.exports = router;

// let symbol = "ABC";
// let symbol_id = 555;

// // pass EvtAction instance as a action
// let newTrxId = (await apiCaller.pushTransaction(
//     new EVT.EvtAction("newfungible", {
//         name: symbol + ".POINTS",
//         sym_name: symbol,
//         sym: "5, S#" + symbol_id,
//         creator: publicKey,
//         manage: { name: "manage", threshold: 1, authorizers: [ { ref: "[A] " + publicKey, weight: 1  } ] },
//         issue: { name: "issue", threshold: 1, authorizers: [ { ref: "[A] " + publicKey, weight: 1  } ] },
//         total_supply: "100000.00000 S#" + symbol_id
//     })
// )).transactionId;
