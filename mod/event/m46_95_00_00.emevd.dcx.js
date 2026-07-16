// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90015000, 0, 46950800, 907100300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46950800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46950800, 46950800, 1020, 920210, 11290, 907100300, 46950800);
    $InitializeCommonEvent(0, 9005810, 46950800, 46950500, 46951500, 5);
    $InitializeCommonEvent(0, 90015005, 46951500, 46952800, 46950800);
    $InitializeCommonEvent(0, 90015000, 0, 46950810, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46950810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46950810, 46950810, 1020, 920210, 11290, 907100300, 46950810);
    $InitializeCommonEvent(0, 9005810, 46950810, 46950500, 46951500, 5);
    $InitializeCommonEvent(0, 90015005, 46951500, 46952800, 46950810);
    $InitializeCommonEvent(0, 90015000, 0, 46950820, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46950820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46950820, 46950820, 1020, 920210, 11290, 907100300, 46950820);
    $InitializeCommonEvent(0, 9005810, 46950820, 46950500, 46951500, 5);
    $InitializeCommonEvent(0, 90015005, 46951500, 46952800, 46950820);
    $InitializeCommonEvent(0, 90015000, 0, 46950830, 903800600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46950830, 30, 940000, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46950830, 46950830, 1020, 940000, 11290, 907100300, 46950830);
    $InitializeCommonEvent(0, 9005810, 46950830, 46950500, 46951500, 5);
    $InitializeCommonEvent(0, 90015005, 46951500, 46952800, 46950830);
    GotoIf(S0, Signed(16951) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46950800, 920210, 46950800, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46950800, 920210, 46950810, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46950800, 920210, 46950820, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46950800, 940000, 46950830, 16951, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46950800);
    $InitializeCommonEvent(0, 90015016, 46950800);
    $InitializeCommonEvent(0, 90015015, 46950810);
    $InitializeCommonEvent(0, 90015016, 46950810);
    $InitializeCommonEvent(0, 90015015, 46950820);
    $InitializeCommonEvent(0, 90015016, 46950820);
    $InitializeCommonEvent(0, 90015015, 46950830);
    $InitializeCommonEvent(0, 90015016, 46950830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46950800);
        $InitializeCommonEvent(0, 90015468, 46950800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46950810);
        $InitializeCommonEvent(0, 90015468, 46950810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46950820);
        $InitializeCommonEvent(0, 90015468, 46950820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46950830);
        $InitializeCommonEvent(0, 90015468, 46950830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46950800);
    $InitializeCommonEvent(0, 90015199, 46950810);
    $InitializeCommonEvent(0, 90015199, 46950820);
    $InitializeCommonEvent(0, 90015199, 46950830);
});

$Event(46692200, Default, function(chrEntityId) {
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

$Event(46692500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});


