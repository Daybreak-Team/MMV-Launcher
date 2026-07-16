// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46560800, 903100600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560800, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560800, 46560800, 1020, 921010, 11290, 903100600, 46560800);
    $InitializeCommonEvent(0, 9005810, 46560800, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560800);
    $InitializeCommonEvent(0, 90015000, 0, 46560810, 904770000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560810, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560810, 46560810, 1020, 931000, 11290, 904770000, 46560810);
    $InitializeCommonEvent(0, 9005810, 46560810, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560810);
    $InitializeCommonEvent(0, 90015000, 0, 46560820, 903050500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560820, 30, 950000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560820, 46560820, 1020, 950000, 11290, 903050500, 46560820);
    $InitializeCommonEvent(0, 9005810, 46560820, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46560800, 921010, 46560800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46560810, 931000, 46560810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46560820, 950000, 46560820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46560800);
    $InitializeCommonEvent(0, 90015016, 46560800);
    $InitializeCommonEvent(0, 90015015, 46560810);
    $InitializeCommonEvent(0, 90015016, 46560810);
    $InitializeCommonEvent(0, 90015015, 46560820);
    $InitializeCommonEvent(0, 90015016, 46560820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46560800);
        $InitializeCommonEvent(0, 90015468, 46560800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46560810);
        $InitializeCommonEvent(0, 90015468, 46560810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46560820);
        $InitializeCommonEvent(0, 90015468, 46560820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46560800);
    $InitializeCommonEvent(0, 90015199, 46560810);
    $InitializeCommonEvent(0, 90015199, 46560820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
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
