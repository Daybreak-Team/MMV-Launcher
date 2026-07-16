// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46775800, 905081001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46775800, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46775800, 46775800, 1020, 940000, 11290, 905081001, 46775800);
    $InitializeCommonEvent(0, 9005810, 46770800, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46775800);
    $InitializeCommonEvent(0, 90015000, 0, 46775810, 905320001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46775810, 30, 940210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46775810, 46775810, 1020, 940210, 11290, 905320001, 46775810);
    $InitializeCommonEvent(0, 9005810, 46770810, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46775810);
    $InitializeCommonEvent(0, 90015000, 0, 46770820, 904630310, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46770820, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46770820, 46770820, 1020, 940000, 11290, 904630310, 46770820);
    $InitializeCommonEvent(0, 9005810, 46770820, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46770820);
    $InitializeCommonEvent(0, 90015000, 0, 46770830, 903181400, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46770830, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46770830, 46770830, 1020, 921410, 11290, 903181400, 46770830);
    $InitializeCommonEvent(0, 9005810, 46770830, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46770830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46770800, 940000, 46775800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770810, 940210, 46775810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770820, 940000, 46770820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770830, 921410, 46770830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46775800);
    $InitializeCommonEvent(0, 90015016, 46775800);
    $InitializeCommonEvent(0, 90015016, 46775810);
    $InitializeCommonEvent(0, 90015015, 46775810);
    $InitializeCommonEvent(0, 90015015, 46770820);
    $InitializeCommonEvent(0, 90015016, 46770820);
    $InitializeCommonEvent(0, 90015015, 46770830);
    $InitializeCommonEvent(0, 90015016, 46770830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46775800);
        $InitializeCommonEvent(0, 90015468, 46775800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46775810);
        $InitializeCommonEvent(0, 90015468, 46775810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46770820);
        $InitializeCommonEvent(0, 90015468, 46770820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46770830);
        $InitializeCommonEvent(0, 90015468, 46770830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46775800);
    $InitializeCommonEvent(0, 90015199, 46775810);
    $InitializeCommonEvent(0, 90015199, 46770820);
    $InitializeCommonEvent(0, 90015199, 46770830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46772200, Default, function(chrEntityId) {
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
