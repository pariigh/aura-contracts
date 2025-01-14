import { chainIds } from "../../tasks/utils";

export const configs = {
    main: {
        hub: "https://hub.snapshot.org",
        space: "gauges.aurafinance.eth",
    },
    test: {
        hub: "https://testnet.snapshot.org",
        space: "432423532464535344321.eth",
    },
};

export const validNetworks = [
    chainIds.mainnet,
    chainIds.base,
    chainIds.optimism,
    chainIds.avalanche,
    chainIds.zkevm,
    chainIds.gnosis,
    chainIds.polygon,
    chainIds.arbitrum,
];

export const networkLabels = {
    [chainIds.base]: "b",
    [chainIds.optimism]: "o",
    [chainIds.avalanche]: "av",
    [chainIds.zkevm]: "z",
    [chainIds.gnosis]: "g",
    [chainIds.polygon]: "p",
    [chainIds.arbitrum]: "a",
};

export const symbolOverrides = {
    "0x9559aaa82d9649c7a7b220e7c461d2e74c9a3593": "StaFi rETH",
    "0xd103dd49b8051a09b399a52e9a8ab629392de2fb": "p-Gyroe WMATIC/stMATIC",
};

export const priorityGuagesAddresses = [
    "0xb78543e00712C3ABBA10D0852f6E38FDE2AaBA4d", // veBAL
    "0x0312aa8d0ba4a1969fddb382235870bf55f7f242", // auraBAL-B-80BAL-20WETH
    "0x275df57d2b23d53e20322b4bb71bf1dcb21d0a00", // WETH-AURA
    "0x2e79d6f631177f8e7f08fbd5110e893e1b1d790a", // 33auraBAL-33graviAURA-33WETH
];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const removedGauges = [
    "0xDc2Df969EE5E66236B950F5c4c5f8aBe62035df2", // sdBAL
    "0xcF5938cA6d9F19C73010c7493e19c02AcFA8d24D", // tetuBAL
    "0xd1177e2157a7fd6a0484b79f8e50e8a9305f8063", // tetuBAL
    "0xf6a814ed60653cb0e36da247b01e6309318328d4", // tetuBAL
    // Duplicate gauges
    "0x455f20c54b5712a84454468c7831f7c431aeEB1C",
].map(x => x.toLowerCase());
