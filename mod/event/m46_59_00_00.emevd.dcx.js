// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46590800, 904270600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46590800, 30, 950010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46590800, 46590800, 1020, 950010, 11290, 904270600, 46590800);
    $InitializeCommonEvent(0, 9005810, 46590800, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46590800);
    $InitializeCommonEvent(0, 90015000, 0, 46595810, 904470003, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46595810, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46595810, 46595810, 1020, 940000, 11290, 904470003, 46595810);
    $InitializeCommonEvent(0, 9005810, 46590810, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46595810);
    $InitializeCommonEvent(0, 90015000, 0, 46590820, 904580600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46590820, 30, 921200, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46590820, 46590820, 1020, 921200, 11290, 904580600, 46590820);
    $InitializeCommonEvent(0, 9005810, 46590820, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46590820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46590800, 950010, 46590800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46590810, 940000, 46595810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46590820, 921200, 46590820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46590800);
    $InitializeCommonEvent(0, 90015016, 46590800);
    $InitializeCommonEvent(0, 90015015, 46595810);
    $InitializeCommonEvent(0, 90015016, 46595810);
    $InitializeCommonEvent(0, 90015015, 46590820);
    $InitializeCommonEvent(0, 90015016, 46590820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46590800);
        $InitializeCommonEvent(0, 90015468, 46590800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46595810);
        $InitializeCommonEvent(0, 90015468, 46595810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46590820);
        $InitializeCommonEvent(0, 90015468, 46590820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46590800);
    $InitializeCommonEvent(0, 90015199, 46595810);
    $InitializeCommonEvent(0, 90015199, 46590820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46592200, Default, function(chrEntityId) {
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
