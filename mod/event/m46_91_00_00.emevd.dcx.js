// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46910800, 904690000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46910800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46910800, 46910800, 1020, 920910, 11290, 904690000, 46910800);
    $InitializeCommonEvent(0, 9005810, 46910800, 46910500, 46911500, 5);
    $InitializeCommonEvent(0, 90015005, 46911500, 46912800, 46910800);
    $InitializeCommonEvent(0, 90015000, 0, 46910810, 904130720, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46910810, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46910810, 46910810, 1020, 931000, 11290, 904690000, 46910810);
    $InitializeCommonEvent(0, 9005810, 46910810, 46910500, 46911500, 5);
    $InitializeCommonEvent(0, 90015005, 46911500, 46912800, 46910810);
    $InitializeCommonEvent(0, 90015000, 0, 46910820, 904978000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46910820, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46910820, 46910820, 1020, 921100, 11290, 904690000, 46910820);
    $InitializeCommonEvent(0, 9005810, 46910820, 46910500, 46911500, 5);
    $InitializeCommonEvent(0, 90015005, 46911500, 46912800, 46910820);
    $InitializeCommonEvent(0, 90015000, 0, 46910830, 905040000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46910830, 30, 941010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46910830, 46910830, 1020, 941010, 11290, 904690000, 46910830);
    $InitializeCommonEvent(0, 9005810, 46910830, 46910500, 46911500, 5);
    $InitializeCommonEvent(0, 90015005, 46911500, 46912800, 46910830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46910800, 920910, 46910800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46910800, 931000, 46910810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46910800, 921100, 46910820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46910800, 941010, 46910830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46910800);
    $InitializeCommonEvent(0, 90015016, 46910800);
    $InitializeCommonEvent(0, 90015015, 46910810);
    $InitializeCommonEvent(0, 90015016, 46910810);
    $InitializeCommonEvent(0, 90015015, 46910820);
    $InitializeCommonEvent(0, 90015016, 46910820);
    $InitializeCommonEvent(0, 90015015, 46910830);
    $InitializeCommonEvent(0, 90015016, 46910830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46910800);
        $InitializeCommonEvent(0, 90015468, 46910800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46910810);
        $InitializeCommonEvent(0, 90015468, 46910810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46910820);
        $InitializeCommonEvent(0, 90015468, 46910820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46910830);
        $InitializeCommonEvent(0, 90015468, 46910830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46910800);
    $InitializeCommonEvent(0, 90015199, 46910810);
    $InitializeCommonEvent(0, 90015199, 46910820);
    $InitializeCommonEvent(0, 90015199, 46910830);
});

$Event(46652200, Default, function(chrEntityId) {
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


