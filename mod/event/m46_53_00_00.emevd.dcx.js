// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    
    $InitializeCommonEvent(0, 90015000, 0, 46530800, 903251600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530800, 46530800, 1020, 920210, 11290, 903251600, 46530800);
    $InitializeCommonEvent(0, 9005810, 46530800, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530800);
    $InitializeCommonEvent(0, 90015000, 0, 46530810, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530810, 46530810, 1020, 920210, 11290, 902500300, 46530810);
    $InitializeCommonEvent(0, 9005810, 46530810, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530810);
    $InitializeCommonEvent(0, 90015000, 0, 46530820, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530820, 46530820, 1020, 920210, 11290, 902500300, 46530820);
    $InitializeCommonEvent(0, 9005810, 46530820, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530820);
    $InitializeCommonEvent(0, 90015000, 0, 46530830, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530830, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530830, 46530830, 1020, 920210, 11290, 902500300, 46530830);
    $InitializeCommonEvent(0, 9005810, 46530830, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530830);
    GotoIf(S0, Signed(13771) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46530800, 920210, 46530800, 13771, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46530810, 920210, 46530810, 13771, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46530820, 920210, 46530820, 13771, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46530820, 920210, 46530830, 13771, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46530800);
    $InitializeCommonEvent(0, 90015016, 46530800);
    $InitializeCommonEvent(0, 90015015, 46530810);
    $InitializeCommonEvent(0, 90015016, 46530810);
    $InitializeCommonEvent(0, 90015015, 46530820);
    $InitializeCommonEvent(0, 90015016, 46530820);
    $InitializeCommonEvent(0, 90015015, 46530830);
    $InitializeCommonEvent(0, 90015016, 46530830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46530800);
        $InitializeCommonEvent(0, 90015468, 46530800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46530810);
        $InitializeCommonEvent(0, 90015468, 46530810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46530820);
        $InitializeCommonEvent(0, 90015468, 46530820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46530830);
        $InitializeCommonEvent(0, 90015468, 46530830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46530800);
    $InitializeCommonEvent(0, 90015199, 46530810);
    $InitializeCommonEvent(0, 90015199, 46530820);
    $InitializeCommonEvent(0, 90015199, 46530830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46532200, Default, function(chrEntityId) {
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

$Event(46532500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
