// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46870800, 903100600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46870800, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46870800, 46870800, 1020, 921010, 11290, 903100600, 46870800);
    $InitializeCommonEvent(0, 9005810, 46870800, 46870500, 46871500, 5);
    $InitializeCommonEvent(0, 90015005, 46871500, 46872800, 46870800);
    $InitializeCommonEvent(0, 90015000, 0, 46870810, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46870810, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46870810, 46870810, 1020, 940000, 11290, 903100600, 46870810);
    $InitializeCommonEvent(0, 9005810, 46870810, 46870500, 46871500, 5);
    $InitializeCommonEvent(0, 90015005, 46871500, 46872800, 46870810);
    $InitializeCommonEvent(0, 90015000, 0, 46870820, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46870820, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46870820, 46870820, 1020, 940000, 11290, 903100600, 46870820);
    $InitializeCommonEvent(0, 9005810, 46870820, 46870500, 46871500, 5);
    $InitializeCommonEvent(0, 90015005, 46871500, 46872800, 46870820);
    $InitializeCommonEvent(0, 90015000, 0, 46870830, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46870830, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46870830, 46870830, 1020, 940000, 11290, 903100600, 46870830);
    $InitializeCommonEvent(0, 9005810, 46870830, 46870500, 46871500, 5);
    $InitializeCommonEvent(0, 90015005, 46871500, 46872800, 46870830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46870800, 921010, 46870800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46870800, 940000, 46870810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46870800, 940000, 46870820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46870800, 940000, 46870830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46870800);
    $InitializeCommonEvent(0, 90015016, 46870800);
    $InitializeCommonEvent(0, 90015015, 46870810);
    $InitializeCommonEvent(0, 90015016, 46870810);
    $InitializeCommonEvent(0, 90015015, 46870820);
    $InitializeCommonEvent(0, 90015016, 46870820);
    $InitializeCommonEvent(0, 90015015, 46870830);
    $InitializeCommonEvent(0, 90015016, 46870830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46870800);
        $InitializeCommonEvent(0, 90015468, 46870800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46870810);
        $InitializeCommonEvent(0, 90015468, 46870810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46870820);
        $InitializeCommonEvent(0, 90015468, 46870820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46870830);
        $InitializeCommonEvent(0, 90015468, 46870830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46870800);
    $InitializeCommonEvent(0, 90015199, 46870810);
    $InitializeCommonEvent(0, 90015199, 46870820);
    $InitializeCommonEvent(0, 90015199, 46870830);
});

$Event(46562200, Default, function(chrEntityId) {
    EndIf(
        !(!EventFlag(7603)
            && (InArea(chrEntityId, 1045392989)
                || InArea(chrEntityId, 1045392988)
                || InArea(chrEntityId, 1044362996)
                || InArea(chrEntityId, 1045382998)
                || InArea(chrEntityId, 1045382997)
                || InArea(chrEntityId, 1045362996)
                || InArea(chrEntityId, 1045362995)
                || InArea(chrEntityId, 1045362994))));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});


