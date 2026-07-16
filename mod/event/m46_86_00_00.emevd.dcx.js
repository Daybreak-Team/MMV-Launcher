// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46860800, 903460500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46860800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46860800, 46860800, 1020, 920910, 11290, 903460500, 46860800);
    $InitializeCommonEvent(0, 9005810, 46860800, 46860500, 46861500, 5);
    $InitializeCommonEvent(0, 90015005, 46861500, 46862800, 46860800);
    $InitializeCommonEvent(0, 90015000, 0, 46860810, 903460600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46860810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46860810, 46860810, 1020, 920910, 11290, 903460500, 46860810);
    $InitializeCommonEvent(0, 9005810, 46860810, 46860500, 46861500, 5);
    $InitializeCommonEvent(0, 90015005, 46861500, 46862800, 46860810);
    $InitializeCommonEvent(0, 90015000, 0, 46860820, 905320000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46860820, 30, 940210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46860820, 46860820, 1020, 940210, 11290, 903460500, 46860820);
    $InitializeCommonEvent(0, 9005810, 46860820, 46860500, 46861500, 5);
    $InitializeCommonEvent(0, 90015005, 46861500, 46862800, 46860820);
    $InitializeCommonEvent(0, 90015000, 0, 46860830, 904580620, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46860830, 30, 931000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46860830, 46860830, 1020, 931000, 11290, 903460500, 46860830);
    $InitializeCommonEvent(0, 9005810, 46860830, 46860500, 46861500, 5);
    $InitializeCommonEvent(0, 90015005, 46861500, 46862800, 46860830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46860800, 920910, 46860800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46860800, 920910, 46860810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46860800, 940210, 46860820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46860800, 931000, 46860830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46860800);
    $InitializeCommonEvent(0, 90015016, 46860800);
    $InitializeCommonEvent(0, 90015015, 46860810);
    $InitializeCommonEvent(0, 90015016, 46860810);
    $InitializeCommonEvent(0, 90015015, 46860820);
    $InitializeCommonEvent(0, 90015016, 46860820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46860800);
        $InitializeCommonEvent(0, 90015468, 46860800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46860810);
        $InitializeCommonEvent(0, 90015468, 46860810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46860820);
        $InitializeCommonEvent(0, 90015468, 46860820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46860830);
        $InitializeCommonEvent(0, 90015468, 46860830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46860800);
    $InitializeCommonEvent(0, 90015199, 46860810);
    $InitializeCommonEvent(0, 90015199, 46860820);
    $InitializeCommonEvent(0, 90015199, 46860830);
});

$Event(46552200, Default, function(chrEntityId) {
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
