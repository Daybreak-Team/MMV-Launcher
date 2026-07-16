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
        if (EventFlag(49780000)) {
            $InitializeCommonEvent(0, 90055000, 49785200, 1, 49782200, 49780201);
            $InitializeCommonEvent(0, 90055001, 49785200, 1, 49780201, 49780200);
        }
        if (EventFlag(49780001)) {
            $InitializeCommonEvent(0, 90055000, 49785200, 2, 49782200, 49780201);
            $InitializeCommonEvent(0, 90055001, 49785200, 2, 49780201, 49780200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49780200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49782200, 49780200);
    }
    $InitializeCommonEvent(0, 90065910, 49780200, 49780205, 49780800, 950000, 690047, 49785210, 49780800, 903251601, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49780200, 49780800, 950000, 49785210, 49780800, 903251601, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49780800, 1, 0, 0, 1050, 950000, 903251601, 49780800);
    }
    $InitializeCommonEvent(0, 90015012, 49785210, 49780200);
    $InitializeCommonEvent(1, 90015012, 0, 49780200);
    $InitializeCommonEvent(0, 90015020, 49780200, 49780800);
    $InitializeCommonEvent(0, 90015008, 49780205, 49780800, 950000, 49780800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49782200, 49780800);
        $InitializeCommonEvent(0, 90015023, 49780200, 40, 0, 49785210, 49780800, 903251601, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49780200, 49785210, 40, 950000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49780200, 49780800, 49785210, 1020, 950000, 110320, 903251601, 49780800);
        $InitializeCommonEvent(0, 90015470, 49782200, 49780200, 49780800, 49785210, 0, 0, 49785210);
        $InitializeCommonEvent(0, 90015446, 49785210, 49780200, 49780800, 49782200);
        $InitializeCommonEvent(0, 90015460, 49782200, 49780800);
        $InitializeCommonEvent(0, 90015460, 49782200, 0);
        $InitializeCommonEvent(0, 90015460, 49782200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49782200, 49780800);
        $InitializeCommonEvent(0, 90015475, 49782200, 0);
        $InitializeCommonEvent(0, 90015475, 49782200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49780800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49780000, 49780300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49780000, 49780300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49780000, 49780300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49780000, 49780300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49780000, 49780300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49780000, 49780300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49780000, 49780301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49780000, 49780301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49780000, 49780301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49780000, 49780301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49780000, 49780301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49780000, 49780301);
    }
    DisableLockOnPoint(49780800, 221);
});

$Event(497802800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49782810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    DisableCharacterHPBarDisplay(49780801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49780800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
