// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46820800, 903181300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46820800, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46820800, 46820800, 1020, 921410, 11290, 903181300, 46820800);
    $InitializeCommonEvent(0, 9005810, 46820800, 46820500, 46821500, 5);
    $InitializeCommonEvent(0, 90015005, 46821500, 46822800, 46820800);
    $InitializeCommonEvent(0, 90015000, 0, 46820810, 904976000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46820810, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46820810, 46820810, 1020, 921100, 11290, 903181300, 46820810);
    $InitializeCommonEvent(0, 9005810, 46820810, 46820500, 46821500, 5);
    $InitializeCommonEvent(0, 90015005, 46821500, 46822800, 46820810);
    $InitializeCommonEvent(0, 90015000, 0, 46820820, 904270600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46820820, 30, 950010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46820820, 46820820, 1020, 950010, 11290, 903181300, 46820820);
    $InitializeCommonEvent(0, 9005810, 46820820, 46820500, 46821500, 5);
    $InitializeCommonEvent(0, 90015005, 46821500, 46822800, 46820820);
    $InitializeCommonEvent(0, 90015000, 0, 46820830, 904290310, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46820830, 30, 921100, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46820830, 46820830, 1020, 921100, 11290, 903181300, 46820830);
    $InitializeCommonEvent(0, 9005810, 46820830, 46820500, 46821500, 5);
    $InitializeCommonEvent(0, 90015005, 46821500, 46822800, 46820830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46820800, 921410, 46820800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46820800, 921100, 46820810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46820800, 950010, 46820820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46820800, 921100, 46820830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46820800);
    $InitializeCommonEvent(0, 90015016, 46820800);
    $InitializeCommonEvent(0, 90015015, 46820810);
    $InitializeCommonEvent(0, 90015016, 46820810);
    $InitializeCommonEvent(0, 90015015, 46820820);
    $InitializeCommonEvent(0, 90015016, 46820820);
    $InitializeCommonEvent(0, 90015015, 46820830);
    $InitializeCommonEvent(0, 90015016, 46820830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46820800);
        $InitializeCommonEvent(0, 90015468, 46820800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46820810);
        $InitializeCommonEvent(0, 90015468, 46820810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46820820);
        $InitializeCommonEvent(0, 90015468, 46820820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46820830);
        $InitializeCommonEvent(0, 90015468, 46820830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46820800);
    $InitializeCommonEvent(0, 90015199, 46820810);
    $InitializeCommonEvent(0, 90015199, 46820820);
    $InitializeCommonEvent(0, 90015199, 46820830);
});

$Event(46512200, Default, function(chrEntityId) {
    EndIf(
        !(EventFlag(7603)
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


