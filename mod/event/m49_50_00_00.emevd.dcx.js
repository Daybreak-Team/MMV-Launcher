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
        if (EventFlag(49500000)) {
            $InitializeCommonEvent(0, 90055000, 49505200, 1, 49502200, 49500201);
            $InitializeCommonEvent(0, 90055001, 49505200, 1, 49500201, 49500200);
        }
        if (EventFlag(49500001)) {
            $InitializeCommonEvent(0, 90055000, 49505200, 2, 49502200, 49500201);
            $InitializeCommonEvent(0, 90055001, 49505200, 2, 49500201, 49500200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49500200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49502200, 49500200);
    }
    $InitializeCommonEvent(0, 90065910, 49500200, 49500205, 49500800, 920210, 690047, 49505210, 49500800, 903050900, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49500200, 49500800, 920210, 49505210, 49500800, 903050900, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49500800, 1, 0, 0, 1050, 920210, 903050900, 49500800);
    }
    $InitializeCommonEvent(0, 90015012, 49505210, 49500200);
    $InitializeCommonEvent(1, 90015012, 0, 49500200);
    $InitializeCommonEvent(0, 90015020, 49500200, 49500800);
    $InitializeCommonEvent(0, 90015008, 49500205, 49500800, 920210, 49500800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49502200, 49500800);
        $InitializeCommonEvent(0, 90015023, 49500200, 40, 0, 49505210, 49500800, 903050900, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49500200, 49505210, 40, 920210, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49500200, 0, 49505210, 1020, 920210, 110320, 903050900, 49500800);
        $InitializeCommonEvent(0, 90015470, 49502200, 49500200, 49500800, 49505210, 0, 0, 49505210);
        $InitializeCommonEvent(0, 90015446, 49505210, 49500200, 49500800, 49502200);
        $InitializeCommonEvent(0, 90015460, 49502200, 49500800);
        $InitializeCommonEvent(0, 90015460, 49502200, 0);
        $InitializeCommonEvent(0, 90015460, 49502200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49502200, 49500800);
        $InitializeCommonEvent(0, 90015475, 49502200, 0);
        $InitializeCommonEvent(0, 90015475, 49502200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49500800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49500000, 49500300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49500000, 49500300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49500000, 49500300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49500000, 49500300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49500000, 49500300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49500000, 49500300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49500000, 49500301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49500000, 49500301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49500000, 49500301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49500000, 49500301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49500000, 49500301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49500000, 49500301);
    }
});

$Event(495002800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49502810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49500800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49500801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49500800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
