// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49580000)) {
            $InitializeCommonEvent(0, 90055000, 49585200, 1, 49582200, 49580201);
            $InitializeCommonEvent(0, 90055001, 49585200, 1, 49580201, 49580200);
        }
        if (EventFlag(49580001)) {
            $InitializeCommonEvent(0, 90055000, 49585200, 2, 49582200, 49580201);
            $InitializeCommonEvent(0, 90055001, 49585200, 2, 49580201, 49580200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49580200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49582200, 49580200);
    }
    $InitializeCommonEvent(0, 90065910, 49580200, 49580205, 49580800, 771000, 690047, 49585210, 49580800, 904975000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49580200, 49580800, 771000, 49585210, 49580800, 904975000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49580800, 1, 0, 0, 1050, 771000, 904975000, 49580800);
    }
    $InitializeCommonEvent(0, 90015012, 49585210, 49580200);
    $InitializeCommonEvent(1, 90015012, 0, 49580200);
    $InitializeCommonEvent(0, 90015020, 49580200, 49580800);
    $InitializeCommonEvent(0, 90015008, 49580205, 49580800, 771000, 49580800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49582200, 49580800);
        $InitializeCommonEvent(0, 90015023, 49580200, 40, 0, 49585210, 49580800, 904975000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49580200, 49585210, 40, 771000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49580200, 0, 49585210, 1020, 771000, 110320, 904975000, 49580800);
        $InitializeCommonEvent(0, 90015470, 49582200, 49580200, 49580800, 49585210, 0, 0, 49585210);
        $InitializeCommonEvent(0, 90015446, 49585210, 49580200, 49580800, 49582200);
        $InitializeCommonEvent(0, 90015460, 49582200, 49580800);
        $InitializeCommonEvent(0, 90015460, 49582200, 0);
        $InitializeCommonEvent(0, 90015460, 49582200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49582200, 49580800);
        $InitializeCommonEvent(0, 90015475, 49582200, 0);
        $InitializeCommonEvent(0, 90015475, 49582200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49580800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49580000, 49580300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49580000, 49580300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49580000, 49580300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49580000, 49580300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49580000, 49580300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49580000, 49580300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49580000, 49580301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49580000, 49580301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49580000, 49580301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49580000, 49580301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49580000, 49580301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49580000, 49580301);
    }
});

$Event(495802800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49582810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49580800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49580801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49580800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
