// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46720800, 905810000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720800, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720800, 46720800, 1020, 931000, 11290, 905810000, 46720800);
    $InitializeCommonEvent(0, 9005810, 46720800, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720800);
    $InitializeCommonEvent(0, 90015000, 0, 46720810, 905040000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720810, 30, 941010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720810, 46720810, 1020, 941010, 11290, 905040000, 46720810);
    $InitializeCommonEvent(0, 9005810, 46720810, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720810);
    $InitializeCommonEvent(0, 90015000, 0, 46720820, 905070000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720820, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720820, 46720820, 1020, 942000, 11290, 905070000, 46720820);
    $InitializeCommonEvent(0, 9005810, 46720820, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720820);
    $InitializeCommonEvent(0, 90015000, 0, 46720830, 905070000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720830, 30, 942000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720830, 46720830, 1020, 942000, 11290, 905070000, 46720830);
    $InitializeCommonEvent(0, 9005810, 46720830, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 931000, 46720800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 941010, 46720810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 942000, 46720820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 942000, 46720830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46720800);
    $InitializeCommonEvent(0, 90015016, 46720800);
    $InitializeCommonEvent(0, 90015015, 46720810);
    $InitializeCommonEvent(0, 90015016, 46720810);
    $InitializeCommonEvent(0, 90015015, 46720820);
    $InitializeCommonEvent(0, 90015016, 46720820);
    $InitializeCommonEvent(0, 90015015, 46720830);
    $InitializeCommonEvent(0, 90015016, 46720830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46720800);
        $InitializeCommonEvent(0, 90015468, 46720800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720810);
        $InitializeCommonEvent(0, 90015468, 46720810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720820);
        $InitializeCommonEvent(0, 90015468, 46720820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720830);
        $InitializeCommonEvent(0, 90015468, 46720830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46720800);
    $InitializeCommonEvent(0, 90015199, 46720810);
    $InitializeCommonEvent(0, 90015199, 46720820);
    $InitializeCommonEvent(0, 90015199, 46720830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46722200, Default, function(chrEntityId) {
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
