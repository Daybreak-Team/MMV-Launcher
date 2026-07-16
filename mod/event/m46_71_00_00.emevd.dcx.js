// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46710800, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46710800, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46710800, 46710800, 1020, 942000, 11290, 903800710, 46710800);
    $InitializeCommonEvent(0, 9005810, 46710800, 46710500, 46711500, 5);
    $InitializeCommonEvent(0, 90015005, 46711500, 46712800, 46710800);
    $InitializeCommonEvent(0, 90015000, 0, 46710810, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46710810, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46710810, 46710810, 1020, 942000, 11290, 903800710, 46710810);
    $InitializeCommonEvent(0, 9005810, 46710810, 46710500, 46711500, 5);
    $InitializeCommonEvent(0, 90015005, 46711500, 46712800, 46710810);
    $InitializeCommonEvent(0, 90015000, 0, 46710820, 903800700, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46710820, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46710820, 46710820, 1020, 942000, 11290, 903800700, 46710820);
    $InitializeCommonEvent(0, 9005810, 46710820, 46710500, 46711500, 5);
    $InitializeCommonEvent(0, 90015005, 46711500, 46712800, 46710820);
    $InitializeCommonEvent(0, 90015000, 0, 46710830, 904020540, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46710830, 30, 921210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46710830, 46710830, 1020, 921210, 11290, 904020540, 46710830);
    $InitializeCommonEvent(0, 9005810, 46710830, 46710500, 46711500, 5);
    $InitializeCommonEvent(0, 90015005, 46711500, 46712800, 46710830);    
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46710800, 942000, 46710800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46710810, 942000, 46710810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46710820, 942000, 46710820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46710830, 921210, 46710830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46710800);
    $InitializeCommonEvent(0, 90015016, 46710800);
    $InitializeCommonEvent(0, 90015015, 46710810);
    $InitializeCommonEvent(0, 90015016, 46710810);
    $InitializeCommonEvent(0, 90015015, 46710820);
    $InitializeCommonEvent(0, 90015016, 46710820);
    $InitializeCommonEvent(0, 90015015, 46710830);
    $InitializeCommonEvent(0, 90015016, 46710830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46710800);
        $InitializeCommonEvent(0, 90015071, 46710810);
        $InitializeCommonEvent(0, 90015071, 46710820);
        $InitializeCommonEvent(0, 90015071, 46710830);
    }
    $InitializeCommonEvent(0, 90015199, 46710800);
    $InitializeCommonEvent(0, 90015199, 46710810);
    $InitializeCommonEvent(0, 90015199, 46710820);
    $InitializeCommonEvent(0, 90015199, 46710830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46712200, Default, function(chrEntityId) {
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
