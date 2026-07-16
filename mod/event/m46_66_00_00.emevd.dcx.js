// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46660800, 904770001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660800, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660800, 46660800, 1020, 931010, 11290, 904770001, 46660800);
    $InitializeCommonEvent(0, 9005810, 46660800, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660800);
    $InitializeCommonEvent(0, 90015000, 0, 46660810, 905820600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660810, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660810, 46660810, 1020, 931000, 11290, 905820600, 46660810);
    $InitializeCommonEvent(0, 9005810, 46660810, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660810);
    $InitializeCommonEvent(0, 90015000, 0, 46660820, 905210600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660820, 30, 950000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660820, 46660820, 1020, 950000, 11290, 905210600, 46660820);
    $InitializeCommonEvent(0, 9005810, 46660820, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46660800, 931010, 46660800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46660810, 931000, 46660810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46660820, 950000, 46660820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46660800);
    $InitializeCommonEvent(0, 90015016, 46660800);
    $InitializeCommonEvent(0, 90015015, 46660810);
    $InitializeCommonEvent(0, 90015016, 46660810);
    $InitializeCommonEvent(0, 90015015, 46660820);
    $InitializeCommonEvent(0, 90015016, 46660820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46660800);
        $InitializeCommonEvent(0, 90015468, 46660800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46660810);
        $InitializeCommonEvent(0, 90015468, 46660810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46660820);
        $InitializeCommonEvent(0, 90015468, 46660820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46660800);
    $InitializeCommonEvent(0, 90015199, 46660810);
    $InitializeCommonEvent(0, 90015199, 46660820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46662200, Default, function(chrEntityId) {
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
