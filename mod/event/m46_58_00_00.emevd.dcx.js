// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46580800, 904500600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580800, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580800, 46580800, 1020, 920310, 11290, 904500600, 46580800);
    $InitializeCommonEvent(0, 9005810, 46580800, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580800);
    $InitializeCommonEvent(0, 90015000, 0, 46580810, 905860000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580810, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580810, 46580810, 1020, 920310, 11290, 905860000, 46580810);
    $InitializeCommonEvent(0, 9005810, 46580810, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580810);
    $InitializeCommonEvent(0, 90015000, 0, 46580820, 904910320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580820, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580820, 46580820, 1020, 920310, 11290, 904910320, 46580820);
    $InitializeCommonEvent(0, 9005810, 46580820, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580820);
    $InitializeCommonEvent(0, 90015000, 0, 46580830, 904502600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580830, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580830, 46580830, 1020, 920910, 11290, 904502600, 46580830);
    $InitializeCommonEvent(0, 9005810, 46580830, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46580800, 920310, 46580800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580810, 920310, 46580810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580820, 920310, 46580820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580830, 920910, 46580830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46580800);
    $InitializeCommonEvent(0, 90015016, 46580800);
    $InitializeCommonEvent(0, 90015015, 46580810);
    $InitializeCommonEvent(0, 90015016, 46580810);
    $InitializeCommonEvent(0, 90015015, 46580820);
    $InitializeCommonEvent(0, 90015016, 46580820);
    $InitializeCommonEvent(0, 90015015, 46580830);
    $InitializeCommonEvent(0, 90015016, 46580830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46580800);
        $InitializeCommonEvent(0, 90015468, 46580800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580810);
        $InitializeCommonEvent(0, 90015468, 46580810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580820);
        $InitializeCommonEvent(0, 90015468, 46580820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580830);
        $InitializeCommonEvent(0, 90015468, 46580830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46580800);
    $InitializeCommonEvent(0, 90015199, 46580810);
    $InitializeCommonEvent(0, 90015199, 46580820);
    $InitializeCommonEvent(0, 90015199, 46580830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46582200, Default, function(chrEntityId) {
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
