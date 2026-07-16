// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 49822820);
    $InitializeEvent(0, 49822821);
    if (IsMapVariation(0)) {
        if (EventFlag(49820000)) {
            $InitializeCommonEvent(0, 90055000, 49825200, 1, 49822200, 49820201);
            $InitializeCommonEvent(0, 90055001, 49825200, 1, 49820201, 49820200);
        }
        if (EventFlag(49820001)) {
            $InitializeCommonEvent(0, 90055000, 49825200, 2, 49822200, 49820201);
            $InitializeCommonEvent(0, 90055001, 49825200, 2, 49820201, 49820200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49820200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49822200, 49820200);
    }
    $InitializeCommonEvent(0, 90065910, 49820200, 49820205, 49820800, 940210, 690047, 49825210, 49820800, 905312000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49820200, 49820800, 940210, 49825210, 49820800, 905312000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49820800, 1, 0, 0, 1050, 940210, 905312000, 49820800);
    }
    $InitializeCommonEvent(0, 90015012, 49825210, 49820200);
    $InitializeCommonEvent(1, 90015012, 0, 49820200);
    $InitializeCommonEvent(0, 90015020, 49820200, 49820800);
    $InitializeCommonEvent(0, 90015008, 49820205, 49820800, 940210, 49820800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49822200, 49820800);
        $InitializeCommonEvent(0, 90015023, 49820200, 40, 0, 49825210, 49820800, 905312000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49820200, 49825210, 40, 940210, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49820200, 49820800, 49825210, 1020, 940210, 110320, 905312000, 49820800);
        $InitializeCommonEvent(0, 90015470, 49822200, 49820200, 49820800, 49825210, 0, 0, 49825210);
        $InitializeCommonEvent(0, 90015446, 49825210, 49820200, 49820800, 49822200);
        $InitializeCommonEvent(0, 90015460, 49822200, 49820800);
        $InitializeCommonEvent(0, 90015460, 49822200, 0);
        $InitializeCommonEvent(0, 90015460, 49822200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49822200, 49820800);
        $InitializeCommonEvent(0, 90015475, 49822200, 0);
        $InitializeCommonEvent(0, 90015475, 49822200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49820800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49820000, 49820300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49820000, 49820300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49820000, 49820300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49820000, 49820300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49820000, 49820300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49820000, 49820300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49820000, 49820301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49820000, 49820301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49820000, 49820301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49820000, 49820301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49820000, 49820301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49820000, 49820301);
    }
    DisableLockOnPoint(49820800, 221);
});

$Event(49822820, Default, function() {
    SetNetworkUpdateRate(49820800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(49820810, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820811, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820812, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820813, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820814, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820815, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820820, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820821, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetNetworkUpdateRate(49820822, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    SetCharacterEventTarget(49820810, 49820800);
    SetCharacterEventTarget(49820811, 49820800);
    SetCharacterEventTarget(49820812, 49820800);
    SetCharacterEventTarget(49820813, 49820800);
    SetCharacterEventTarget(49820814, 49820800);
    SetCharacterEventTarget(49820815, 49820800);
    SetCharacterEventTarget(49820820, 49820800);
    SetCharacterEventTarget(49820821, 49820800);
    SetCharacterEventTarget(49820822, 49820800);
    DisableCharacterHPBarDisplay(49820810);
    DisableCharacterHPBarDisplay(49820811);
    DisableCharacterHPBarDisplay(49820812);
    DisableCharacterHPBarDisplay(49820813);
    DisableCharacterHPBarDisplay(49820814);
    DisableCharacterHPBarDisplay(49820815);
    DisableCharacterHPBarDisplay(49820820);
    DisableCharacterHPBarDisplay(49820821);
    DisableCharacterHPBarDisplay(49820822);
});

$Event(49822821, Default, function() {
    WaitFor(CharacterDead(49820800));
    DisableCharacter(49820810);
    DisableCharacter(49820811);
    DisableCharacter(49820812);
    DisableCharacter(49820813);
    DisableCharacter(49820814);
    DisableCharacter(49820815);
    DisableCharacter(49820820);
    DisableCharacter(49820821);
    DisableCharacter(49820822);
});

$Event(498202800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49822810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49820801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49820800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


