// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    $InitializeCommonEvent(0, 90015000, 0, 46520800, 903250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520800, 46520800, 1020, 920210, 11290, 903250600, 46520800);
    $InitializeCommonEvent(0, 9005810, 46520800, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520800);
    $InitializeCommonEvent(0, 90015000, 0, 46520810, 904640100, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520810, 46520810, 1020, 920610, 11290, 904640100, 46520810);
    $InitializeCommonEvent(0, 9005810, 46520810, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520810);
    $InitializeCommonEvent(0, 90015000, 0, 46520820, 904811000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520820, 46520820, 1020, 920610, 11290, 904811000, 46520820);
    $InitializeCommonEvent(0, 9005810, 46520820, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520820);
    $InitializeCommonEvent(0, 90015000, 0, 46520830, 903253500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520830, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520830, 46520830, 1020, 920210, 11290, 903253500, 46520830);
    $InitializeCommonEvent(0, 9005810, 46520830, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522830, 46520830);
    GotoIf(S0, Signed(13708) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46520800, 920210, 46520800, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520810, 920610, 46520810, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520820, 920610, 46520820, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520830, 920210, 46520830, 13708, 0);    
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46520800);
    $InitializeCommonEvent(0, 90015016, 46520800);
    $InitializeCommonEvent(0, 90015015, 46520810);
    $InitializeCommonEvent(0, 90015016, 46520810);
    $InitializeCommonEvent(0, 90015015, 46520820);
    $InitializeCommonEvent(0, 90015016, 46520820);
    $InitializeCommonEvent(0, 90015015, 46520830);
    $InitializeCommonEvent(0, 90015016, 46520830);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46520800);
        $InitializeCommonEvent(0, 90015468, 46520800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520810);
        $InitializeCommonEvent(0, 90015468, 46520810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520820);
        $InitializeCommonEvent(0, 90015468, 46520820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520830);
        $InitializeCommonEvent(0, 90015468, 46520830, 8270, 8247);        
    }
    $InitializeCommonEvent(0, 90015199, 46520800);
    $InitializeCommonEvent(0, 90015199, 46520810);
    $InitializeCommonEvent(0, 90015199, 46520820);
    $InitializeCommonEvent(0, 90015199, 46520830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46522200, Default, function(chrEntityId) {
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

$Event(46522500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
