const Just = (x) => ({
    chain: f => f(x),
    emit: () => x,
    map: f => MaybeOf(f(x)),
    fork: (_, g) => g(x),           // Not a 'standard' Maybe function (?)
    isJust: true,
    isNothing: false,
    inspect: () => `Just(${x})`
});

const Nothing = (x) => ({
    chain: f => Nothing(),
    emit: () => Nothing(),
    map: _ => Nothing(),
    fork: (f, _) => f(),
    isJust: false,
    isNothing: true,
    inspect: 'Nothing'
});

const MaybeOf = x => x === null || x === undefined || x.isNothing ? Nothing() : Just(x);

const exportMaybe = {
    of: MaybeOf
};

export {
    exportMaybe as Maybe
}

