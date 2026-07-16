// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46750800, 904510601, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46750800, 30, 921300, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46750800, 46750800, 1020, 921300, 11290, 904510601, 46750800);
    $InitializeCommonEvent(0, 9005810, 46750800, 46750500, 46751500, 5);
    $InitializeCommonEvent(0, 90015005, 46751500, 46752800, 46750800);
    $InitializeCommonEvent(0, 90015000, 0, 46750810, 904503600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46750810, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46750810, 46750810, 1020, 920310, 11290, 904503600, 46750810);
    $InitializeCommonEvent(0, 9005810, 46750810, 46750500, 46751500, 5);
    $InitializeCommonEvent(0, 90015005, 46751500, 46752800, 46750810);
    $InitializeCommonEvent(0, 90015000, 0, 46750820, 904501600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46750820, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46750820, 46750820, 1020, 920310, 11290, 904501600, 46750820);
    $InitializeCommonEvent(0, 9005810, 46750820, 46750500, 46751500, 5);
    $InitializeCommonEvent(0, 90015005, 46751500, 46752800, 46750820);
    $InitializeCommonEvent(0, 90015000, 0, 46750830, 904650600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46750830, 30, 920300, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46750830, 46750830, 1020, 920300, 11290, 904650600, 46750830);
    $InitializeCommonEvent(0, 9005810, 46750830, 46750500, 46751500, 5);
    $InitializeCommonEvent(0, 90015005, 46751500, 46752800, 46750830);
    GotoIf(S0, Signed(13801) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46750800, 921300, 46750800, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46750810, 920310, 46750810, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46750820, 920310, 46750820, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46750830, 920300, 46750830, 13801, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46750800);
    $InitializeCommonEvent(0, 90015016, 46750800);
    $InitializeCommonEvent(0, 90015015, 46750810);
    $InitializeCommonEvent(0, 90015016, 46750810);
    $InitializeCommonEvent(0, 90015015, 46750820);
    $InitializeCommonEvent(0, 90015016, 46750820);
    $InitializeCommonEvent(0, 90015015, 46750830);
    $InitializeCommonEvent(0, 90015016, 46750830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46750800);
        $InitializeCommonEvent(0, 90015468, 46750800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46750810);
        $InitializeCommonEvent(0, 90015468, 46750810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46750820);
        $InitializeCommonEvent(0, 90015468, 46750820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46750830);
        $InitializeCommonEvent(0, 90015468, 46750830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46750800);
    $InitializeCommonEvent(0, 90015199, 46750810);
    $InitializeCommonEvent(0, 90015199, 46750820);
    $InitializeCommonEvent(0, 90015199, 46750830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46752200, Default, function(chrEntityId) {
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

$Event(46752500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
